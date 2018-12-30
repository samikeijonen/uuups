/* global console, process, __dirname */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */

/**
 * Theme Zip Script
 *
 * Zips the production-ready theme with only the files and folders needed for
 * uploading to a site. In `webpack.settings.js` edit `releaseFiles` to
 * change what's included.
 *
 * @author Brady Vercher
 * @link https://github.com/cedaro/satispress/blob/develop/bin/archive
 *
 * @package Uuups
 */

const archiver = require( 'archiver' );
const config = require( './package.json' );
const fs = require( 'fs-extra' );
const glob = require( 'glob' );
const path = require( 'path' );

// Config files.
const settings = require( './webpack.settings.js' );

const argv = require( 'minimist' )( process.argv.slice( 2 ), {
	string: [ 'version' ],
} );

console.log( argv );

const styleFile = path.join( __dirname, './style.css' );
const packageJson = path.join( __dirname, './package.json' );
let version = argv.version;

if ( ! version ) {
	const contents = fs.readFileSync( styleFile, 'utf8' );
	version = contents.match( /Version:[\s]+(.+)/ )[ 1 ];
}

replaceInFile( styleFile, /(Version:[\s]+).+/, `\$1${ version }` )
	.then( () => replaceInFile( styleFile, /VERSION = '.+'/, `VERSION = '${ version }'` ) )
	.then( () => replaceInFile( packageJson, /"version": "[^"]+"/, `"version": "${ version }"` ) )
	.then( () => compress( config.name, version, settings.release.files ) );

function compress( slug, versionNumber, files ) {
	return new Promise( ( resolve, reject ) => {
		const dist = path.join( __dirname, settings.release.folder );

		try {
			fs.mkdirSync( dist );
		} catch ( error ) {}

		const archive = archiver.create( 'zip' );
		const output = fs.createWriteStream( path.join( dist, `${ slug }-${ versionNumber }.zip` ) );

		output.on( 'close', () => {
			console.log( `Created ${ dist }/${ slug }-${ versionNumber }.zip` );
			console.log( `Total bytes: ${ archive.pointer() }` );
			resolve();
		} );

		output.on( 'error', ( error ) => reject( error ) );

		archive.pipe( output );

		files.forEach( ( pattern ) => {
			glob.sync( pattern, {
				nodir: true,
			} ).forEach( ( file ) => {
				archive.file( file, { name: `${ slug }/${ file }` } ) /* eslint-disable-line */
			} );
		} );

		archive.finalize();
	} );
}

function replaceInFile( file, pattern, replace ) {
	return new Promise( ( resolve ) => {
		let contents = fs.readFileSync( file, 'utf8' );
		contents = contents.replace( pattern, replace );
		fs.writeFileSync( file, contents );
		resolve();
	} );
}
