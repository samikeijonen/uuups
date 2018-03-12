/**
 * Load Config.
 *
 * Customize your project in the config.js file
 */
const config = require( './config.js' );

// Require our dependencies
const autoprefixer = require( 'autoprefixer' );
const babel = require( 'gulp-babel' );
const browserSync = require( 'browser-sync' );
const cheerio = require( 'gulp-cheerio' );
const concat = require( 'gulp-concat' );
const cssnano = require( 'gulp-cssnano' );
const del = require( 'del' );
const eslint = require( 'gulp-eslint' );
const fs = require( 'fs' );
const gulp = require( 'gulp' );
const imagemin = require( 'gulp-imagemin' );
const mqpacker = require( 'css-mqpacker' );
const notify = require( 'gulp-notify' );
const plumber = require( 'gulp-plumber' );
const postcss = require( 'gulp-postcss' );
const reload = browserSync.reload;
const rename = require( 'gulp-rename' );
const sass = require( 'gulp-sass' );
const sassdoc = require( 'sassdoc' );
const sassLint = require( 'gulp-stylelint' );
const sort = require( 'gulp-sort' );
const sourcemaps = require( 'gulp-sourcemaps' );
const svgmin = require( 'gulp-svgmin' );
const svgstore = require( 'gulp-svgstore' );
const uglify = require( 'gulp-uglify' );
const wpPot = require( 'gulp-wp-pot' );

/**
 * Handle errors and alert the user.
 */
function handleErrors() {
	const args = Array.prototype.slice.call( arguments );

	notify.onError( {
		'title': 'Task Failed [<%= error.message %>',
		'message': 'See console.',
		'sound': 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	} ).apply( this, args );

	// Prevent the 'watch' task from stopping.
	this.emit( 'end' );
}

/**
 * Delete *.css and *.min.css before we minify and optimize.
 */
gulp.task( 'clean:styles', () =>
	del( config.styleDistAll )
);

/**
 * Compile Sass and run stylesheet through PostCSS.
 *
 * https://www.npmjs.com/package/gulp-sass
 * https://www.npmjs.com/package/gulp-postcss
 * https://www.npmjs.com/package/gulp-autoprefixer
 * https://www.npmjs.com/package/css-mqpacker
 */
gulp.task( 'postcss', [ 'clean:styles' ], () =>
	gulp.src( config.styleWatchFiles )

		// Deal with errors.
		.pipe( plumber( {'errorHandler': handleErrors} ) )

		// Wrap tasks in a sourcemap.
		.pipe( sourcemaps.init() )

			// Compile Sass using LibSass.
			.pipe( sass( {
				'errLogToConsole': config.errLogToConsole,
				'outputStyle': config.outputStyle,
				'precision': config.precision
			} ) )

			// Parse with PostCSS plugins.
			.pipe( postcss( [
				autoprefixer( {
					'browsers': config.browserList
				} ),
				mqpacker( {
					'sort': true
				} )
			] ) )

		// Create sourcemap.
		.pipe( sourcemaps.write() )

		// Create *.css files.
		.pipe( gulp.dest( config.styleDestination ) )
		.pipe( browserSync.stream() )
);

/**
 * Minify and optimize *.css files.
 *
 * https://www.npmjs.com/package/gulp-cssnano
 */
gulp.task( 'cssnano', [ 'postcss' ], () =>
	gulp.src( config.styleDistSRC )
		.pipe( plumber( {'errorHandler': handleErrors} ) )
		.pipe( cssnano( {
			'safe': true // Use safe optimizations.
		} ) )
		.pipe( rename( {'suffix': '.min'} ) )
		.pipe( gulp.dest( config.styleDestination ) )
		.pipe( browserSync.stream() )
);

/**
 * Delete the svg-icons.svg before we minify, concat.
 */
gulp.task( 'clean:icons', () =>
	del( [ config.svgSprite ] )
);

/**
 * Minify, concatenate, and clean SVG icons.
 *
 * https://www.npmjs.com/package/gulp-svgmin
 * https://www.npmjs.com/package/gulp-svgstore
 * https://www.npmjs.com/package/gulp-cheerio
 */
gulp.task( 'svg', [ 'clean:icons' ], () =>
	gulp.src( config.svgSRC )

		// Deal with errors.
		.pipe( plumber( {'errorHandler': handleErrors} ) )

		// Minify SVGs.
		.pipe( svgmin() )

		// Add a prefix to SVG IDs.
		.pipe( rename( {'prefix': 'icon-'} ) )

		// Combine all SVGs into a single <symbol>.
		.pipe( svgstore( {'inlineSvg': true} ) )

		// Clean up the <symbol> by removing the following cruft.
		.pipe( cheerio( {
			'run': function( $, file ) {
				$( 'svg' ).attr( 'style', 'display:none' );
				$( '[fill]' ).removeAttr( 'fill' );
				$( 'path' ).removeAttr( 'class' );
				$( 'title' ).remove();
			},
			'parserOptions': {'xmlMode': true}
		} ) )

		// Save SVG sprite.
		.pipe( gulp.dest( config.svgDST ) )
		.pipe( browserSync.stream() )
);

/**
 * Optimize images.
 *
 * https://www.npmjs.com/package/gulp-imagemin
 */
gulp.task( 'imagemin', () =>
	gulp.src( config.imgSRC )
		.pipe( plumber( {'errorHandler': handleErrors} ) )
		.pipe( imagemin( {
			'optimizationLevel': 5,
			'progressive': true,
			'interlaced': true
		} ) )
		.pipe( gulp.dest( config.imgDST ) )
);

/**
 * Concatenate and transform JavaScript.
 *
 * https://www.npmjs.com/package/gulp-concat
 * https://github.com/babel/gulp-babel
 * https://www.npmjs.com/package/gulp-sourcemaps
 */
gulp.task( 'concat', () =>
	gulp.src( config.jsConcatSRC )

		// Deal with errors.
		.pipe( plumber(
			{'errorHandler': handleErrors}
		) )

		// Start a sourcemap.
		.pipe( sourcemaps.init() )

		// Convert ES6+ to ES2015.
		.pipe( babel( {
			'presets': [
				[ 'env', {
					'targets': {
						'browsers': config.browserList
					}
				} ]
			]
		} ) )

		// Concatenate partials into a single script.
		.pipe( concat( config.jsConcatFile ) )

		// Append the sourcemap.
		.pipe( sourcemaps.write() )

		// Save JS file.
		.pipe( gulp.dest( config.jsConcatDST ) )
		.pipe( browserSync.stream() )
);

/**
 * Compile JavaScript trough babel.
 *
 * https://github.com/babel/gulp-babel
 * https://www.npmjs.com/package/gulp-sourcemaps
 */
gulp.task( 'compile', () =>
	gulp.src( config.jsSRC )

		// Deal with errors.
		.pipe( plumber(
			{'errorHandler': handleErrors}
		) )

		// Start a sourcemap.
		.pipe( sourcemaps.init() )

		// Convert ES6+ to ES2015.
		.pipe( babel( {
			'presets': [
				[ 'env', {
					'targets': {
						'browsers': config.browserList
					}
				} ]
			]
		} ) )

		// Append the sourcemap.
		.pipe( sourcemaps.write() )

		// Save JS files.
		.pipe( gulp.dest( config.jsDST ) )
		.pipe( browserSync.stream() )
);

/**
  * Minify compiled JavaScript.
  *
  * https://www.npmjs.com/package/gulp-uglify
  */
gulp.task( 'uglify', [ 'concat', 'compile' ], () =>
	gulp.src( config.jsDistSRC )
		.pipe( plumber( {'errorHandler': handleErrors} ) )
		.pipe( rename( {'suffix': '.min'} ) )
		.pipe( uglify( {
			'mangle': false
		} ) )
		.pipe( gulp.dest( config.jsDST ) )
);

/**
 * Delete the theme's .pot before we create a new one.
 */
gulp.task( 'clean:pot', () =>
	del( [ `${config.translationDST}/${config.translationFile}` ] )
);

/**
 * Scan the theme and create a POT file.
 *
 * https://www.npmjs.com/package/gulp-wp-pot
 */
gulp.task( 'wp-pot', [ 'clean:pot' ], () =>
	gulp.src( config.PHPWatchFiles )
		.pipe( plumber( {'errorHandler': handleErrors} ) )
		.pipe( sort() )
		.pipe( wpPot( {
			'domain': config.textDomain,
			'package': config.packageName
		} ) )
		.pipe( gulp.dest( `${config.translationDST}/${config.translationFile}` ) )
);

/**
 * Sass linting.
 *
 * https://www.npmjs.com/package/stylelint
 */
gulp.task( 'sass:lint', () =>
	gulp.src( config.SassLint )
		.pipe( sassLint(
			{
				reporters: [
					{formatter: 'string', console: true}
				]
			}
		) )
);

/**
 * JavaScript linting.
 *
 * https://www.npmjs.com/package/gulp-eslint
 */
gulp.task( 'js:lint', () =>
	gulp.src( config.JSLint )
		.pipe( eslint() )
		.pipe( eslint.format() )
		.pipe( eslint.failAfterError() )
);

/**
 * Sass docs.
 *
 * http://sassdoc.com/getting-started/
 */
gulp.task( 'sassdoc', function() {
	let options = {
		dest: 'docs',
		verbose: true,
		theme: 'herman',
		herman: {
			displayColors: ['hex', 'rgb', 'hsl']
		  }
	};

	return gulp.src( config.styleWatchFiles )
		.pipe( sassdoc( options ) );
} );

/**
 * Process tasks and reload browsers on file changes.
 *
 * https://www.npmjs.com/package/browser-sync
 */
gulp.task( 'watch', function() {

	// Kick off BrowserSync.
	browserSync( {
		'open': config.browserAutoOpen,        // Open project in a new tab?
		'injectChanges': config.injectChanges, // Auto inject changes instead of full reload.
		'proxy': config.projectURL,            // Use http://foxland-products.local:3000 to use BrowserSync.
		'watchOptions': {
			'debounceDelay': 500               // Wait 0.5s second before injecting.
		}
	} );

	// Run tasks when files change.
	gulp.watch( config.SVGWatchFiles, [ 'icons' ] );
	gulp.watch( config.styleWatchFiles, [ 'styles' ] );
	gulp.watch( config.jsSRC, [ 'scripts' ] );
	gulp.watch( config.PHPWatchFiles, [ 'markup' ] );
} );

/**
 * Create individual tasks.
 */
gulp.task( 'markup', browserSync.reload );
gulp.task( 'i18n', [ 'wp-pot' ] );
gulp.task( 'icons', [ 'svg' ] );
gulp.task( 'styles', [ 'cssnano' ] );
gulp.task( 'scripts', [ 'uglify' ] );
gulp.task( 'lint', [ 'sass:lint', 'js:lint' ] );
gulp.task( 'docs', [ 'sassdoc' ] );
gulp.task( 'default', [ 'i18n', 'icons', 'styles', 'scripts', 'imagemin' ] );
