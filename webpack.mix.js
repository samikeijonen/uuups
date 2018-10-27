/**
 * Laravel Mix configuration file.
 *
 * This file stores all the configuration for using Laravel Mix as our primary
 * build tool for the theme. Laravel Mix is a layer built on top of Webpack that
 * simplifies much of the complexity of Webpack's configuration, and is well
 * suited for projects like WordPress themes.
 *
 * @link https://laravel.com/docs/5.6/mix
 *
 * @package Uuups
 */

// Import required packages.
const mix               = require( 'laravel-mix' );
const ImageminPlugin    = require( 'imagemin-webpack-plugin' ).default;
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const imageminMozjpeg   = require( 'imagemin-mozjpeg' );

/*
 * -----------------------------------------------------------------------------
 * Theme Bundle Process
 * -----------------------------------------------------------------------------
 * Configure the export process in `webpack.mix.export.js`. This bit of code
 * should remain at the top of the file here so that it bails early when the
 * `export` command is run.
 * -----------------------------------------------------------------------------
 */

if ( process.env.export ) {
	const exportTheme = require( './webpack.mix.export.js' );
	return;
}

/*
 * -----------------------------------------------------------------------------
 * Build Process
 * -----------------------------------------------------------------------------
 * The section below handles processing, compiling, transpiling, and combining
 * all of the theme's assets into their final location. This is the meat of the
 * build process.
 * -----------------------------------------------------------------------------
 */

/*
 * Sets the development path to assets. By default, this is the `/resources`
 * folder in the theme.
 */
const devPath  = 'resources';

/*
 * Disable success notifications in the browser.
 */
mix.disableSuccessNotifications();

/*
 * Sets the path to the generated assets. By default, this is the `/dist` folder
 * in the theme. If doing something custom, make sure to change this everywhere.
 */
mix.setPublicPath( 'dist' );

/*
 * Builds sources maps for assets.
 *
 * @link https://laravel.com/docs/5.6/mix#css-source-maps
 */
mix.sourceMaps();

/*
 * Versioning and cache busting. Append a unique hash for production assets. If
 * you only want versioned assets in production, do a conditional check for
 * `mix.inProduction()`.
 *
 * @link https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 */
mix.version();

/*
 * Compile JavaScript.
 *
 * @link https://laravel.com/docs/5.6/mix#working-with-scripts
 */
mix.js( `${devPath}/js/app.js`, 'js' )
   .js( `${devPath}/js/customize-controls.js`, 'js' )
   .js( `${devPath}/js/customize-preview.js`, 'js' );

/*
 * Set Laravel Mix options.
 *
 * @link https://laravel.com/docs/5.6/mix#postcss
 * @link https://laravel.com/docs/5.6/mix#url-processing
 */
mix.options( {
	processCssUrls: false
} );

/*
 * Compile CSS. Mix supports Sass, Less, Stylus, and plain CSS, and has functions
 * for each of them.
 *
 * @link https://laravel.com/docs/5.6/mix#working-with-stylesheets
 * @link https://laravel.com/docs/5.6/mix#sass
 * @link https://github.com/sass/node-sass#options
 */
const cssOptions = {
	stage: 0
};

// Default PostCSS plugins.
const PostCssPlugins = [
	require( 'postcss-import' ),
	require( 'postcss-preset-env' )( cssOptions ),
	require( 'postcss-mixins' ),
	require( 'postcss-nested' )
];

// PostCSS plugins for editor only.
const PostCssPluginsEditorOnly = [
	require( 'postcss-prefix-selector' )({
		prefix: '.edit-post-visual-editor .editor-block-list__block',
		exclude: [
			':root',
			'.edit-post-visual-editor .editor-block-list__block',
			'.editor-post-title__block .editor-post-title__input',
			':root body.gutenberg-editor-page .editor-post-title__block',
			':root body.gutenberg-editor-page .editor-default-block-appender',
			':root body.gutenberg-editor-page .editor-block-list__block',
			':root body.gutenberg-editor-page .editor-block-list__block[data-align="wide"]',
			':root body.gutenberg-editor-page .editor-block-list__block[data-align="full"]'
		]
	})
];

// Merge default and editor PostCSS plugins.
const PostCssPluginsEditor = PostCssPlugins.concat( PostCssPluginsEditorOnly );

// Compile CSS.
mix.postCss( `${devPath}/css/style.css`, 'css', PostCssPlugins )
   .postCss( `${devPath}/css/customize-controls.css`, 'css', PostCssPlugins )
   .postCss( `${devPath}/css/style-editor.css`, 'css', PostCssPluginsEditor );

/*
 * Add custom Webpack configuration.
 *
 * Laravel Mix doesn't currently minimize images while using its `.copy()`
 * function, so we're using the `CopyWebpackPlugin` for processing and copying
 * images into the distribution folder.
 *
 * @link https://laravel.com/docs/5.6/mix#custom-webpack-configuration
 * @link https://webpack.js.org/configuration/
 */
mix.webpackConfig( {
	stats: 'minimal',
	devtool: mix.inProduction() ? false : 'source-map',
	performance: { hints: false    },
	externals: { jquery: 'jQuery' },
	resolve     : {
		alias : {
			// Alias for Hybrid Customize assets.
			// Import from `hybrid-customize/js` or `~hybrid-customize/scss`.
			'hybrid-customize' : path.resolve( __dirname, 'vendor/justintadlock/hybrid-customize/resources/' )
		}
	},
	plugins: [
		// @link https://github.com/webpack-contrib/copy-webpack-plugin
		new CopyWebpackPlugin( [
			{ from: `${devPath}/img`,   to: 'img' },
			{ from: `${devPath}/svg`,   to: 'svg' },
			{ from: `${devPath}/fonts`, to: 'fonts' }
		] ),
		// @link https://github.com/Klathmon/imagemin-webpack-plugin
		new ImageminPlugin( {
			test: /\.(jpe?g|png|gif|svg)$/i,
			//disable: process.env.NODE_ENV !== 'production',
			optipng: { optimizationLevel: 3 },
			gifsicle: { optimizationLevel: 3 },
			pngquant: {
				quality: '65-90',
				speed: 4
			},
			svgo: {
				plugins: [
					{ removeUnknownsAndDefaults: false },
					{ cleanupIDs: false },
					{ removeViewBox: false },
					{
						addAttributesToSVGElement: {
							attributes: [
								{ 'focusable': 'false' },
								{ 'aria-hidden': 'true' },
								{ 'role': 'img' }
							]
						},
					},
					{
						addClassesToSVGElement: {
							classNames: [ 'svg' ]
						}
					}
				]
			},
			plugins: [
				// @link https://github.com/imagemin/imagemin-mozjpeg
				imageminMozjpeg( { quality: 75 } )
			]
		} )
	]
} );

/*
 * Monitor files for changes and inject your changes into the browser.
 *
 * @link https://laravel.com/docs/5.6/mix#browsersync-reloading
 */
mix.browserSync( {
	proxy: 'foxland-products.test/',
	files: [
		'dist/**/*.{css,js,jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		`${devPath}/views/**/*.php`,
		'app/**/*.php',
		'functions.php',
		'index.php'
	]
} );
