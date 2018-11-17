/**
 * Theme Export Script
 *
 * Exports the production-ready theme with only the files and folders needed for
 * uploading to a site or zipping. Edit the `files` or `folders` variables if
 * you need to change something.
 *
 * @package Uuups
 */

// Import required packages.
const rimraf = require( 'rimraf' );
const fs     = require( 'fs-extra' );

// Get theme name from package.json file.
const packageJson = require('./package.json');
const themeName   = packageJson.name;

// Folder name to export the files in.
let exportPath = `export/${themeName}`;

// Theme root-level files to include.
let files = [
	'changelog.md',
	'functions.php',
	'index.php',
	'license.md',
	'readme.md',
	'screenshot.png',
	'style.css'
];

// Folders to include.
let folders = [
	'app',
	'dist',
	'resources/css',   // Required for WordPress.org theme review.
	'resources/lang',
	'resources/js',    // Required for WordPress.org theme review.
	'resources/views',
	'vendor'
];

// Delete the previous export to start clean.
rimraf.sync( exportPath );

// Loop through the root files and copy them over.
files.forEach( file => {
	if ( fs.existsSync( file ) ) {
		fs.copy( file, `${exportPath}/${file}`, err => {
			if ( err ) {
				return console.error( err );
			}

			console.log( 'Copied files successfully.' );
		} );
	}
} );

// Loop through the folders and copy them over.
folders.forEach( folder => {
	if ( fs.existsSync( folder ) ) {
		fs.copy( folder, `${exportPath}/${folder}`, err => {
			if ( err ) {
				return console.error( err );
			}

			console.log( 'Copied folders successfully.' );
		} );
	}
} );

// Delete the `vendor/bin` and `vendor/composer/installers` folder, which can
// get left over, even in production.
let foldersRemoved = [
	`${exportPath}/vendor/bin`,
	`${exportPath}/vendor/composer/installers`
];

foldersRemoved.forEach( folderRemoved => {
	rimraf.sync( folderRemoved );
} );
