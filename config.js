/**
 * Configuration based on WPGulp.
 *
 * @link: https://github.com/ahmadawais/WPGulp
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

module.exports = {
	// Project options.
	project: 'Uuups', // Project Name.
	projectURL: 'foxland-products.local/', // Local project URL of your already running WordPress site. Could be something like local.dev or localhost:8888.
	productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: true,
	injectChanges: true,

	// Style options.
	styleSRC: './resources/styles/style.scss', // Path to main .scss file.
	styleDistAll: [ 'resources/dist/styles/*.css' ], // All CSS dist files.
	styleDistSRC: [ 'resources/dist/styles/*.css', '!resources/dist/styles/*.min.css' ], // All CSS dist files but not *.min files.
	styleDestination: './resources/dist/styles/', // Path to place the compiled CSS file.
	outputStyle: 'expanded', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,
	styleName: 'style.css',
	styleMinName: 'style.min.css',
	SassLint: [
		'resources/styles/**/*.scss',
		'!resources/styles/generic/_normalize.scss',
		'!node_modules/**'
	],

	// JS Vendor options.
	jsSRC: [ 'resources/scripts/*.js', '!resources/scripts/*.min.js' ], // All JS files.
	jsDistSRC: [ 'resources/dist/scripts/*.js', '!resources/dist/scripts/*.min.js' ], // All JS dist files.
	jsDST: './resources/dist/scripts/', // Path to place the compiled JS vendors file.
	JSLint: [
		'resources/scripts/concat/*.js',
		'resources/scripts/*.js',
		'!resources/scripts/project.js',
		'!resources/scripts/*.min.js',
		'!gruntfile.js',
		'!gulpfile.js',
		'!node_modules/**'
	],

	// JS Custom options.
	jsConcatSRC: './resources/scripts/concat/*.js', // Path to JS custom scripts folder.
	jsConcatDST: './resources/dist/scripts/', // Path to place the compiled JS custom scripts file.
	jsConcatFile: 'project.js', // Compiled JS custom file name. Default set to custom i.e. project.js.

	// Images options.
	imgSRC: [ 'resources/images/*' ], // Source folder of images which should be optimized and watched.
	imgDST: './resources/dist/images/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// SVG options.
	svgSprite: './resources/dist/images/svg-icons.svg', // SVG sprite file.
	svgSRC: './resources/svg-icons/*.svg', // Source folder of SVG icons.
	svgDST: './resources/dist/images/', // Destination folder of svg sprite file. Must be different from the svgSRC folder.

	// Watch files paths.
	styleWatchFiles: 'resources/styles/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	vendorJSWatchFiles: 'resources/scripts/vendor/*.js', // Path to all vendor JS files.
	customJSWatchFiles: 'resources/scripts/custom/*.js', // Path to all custom JS files.
	PHPWatchFiles: '**/*.php', // Path to all PHP files.
	SVGWatchFiles: 'resources/svg-icons/*.svg', // Path to all SVG files.

	// Translation options.
	textDomain: 'uuups', // Your textdomain here.
	translationFile: 'uuups.pot', // Name of the transalation file.
	translationDST: './languages', // Where to save the translation files.
	packageName: 'Uuups', // Package name.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	browserList: [
		'last 2 version',
		'ie 11'
	]
};
