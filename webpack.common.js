/* global __dirname, process, module */

const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );
const ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
const imageminMozjpeg = require( 'imagemin-mozjpeg' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const isProduction = 'production' === process.env.NODE_ENV;

// Config files.
const settings = require( './webpack.settings.js' );

// Configure entries.
const configureEntries = () => {
	const entries = {};

	for ( const [ key, value ] of Object.entries( settings.entries ) ) {
		entries[ key ] = path.resolve( __dirname, value );
	}

	return entries;
};

module.exports = {
	entry: configureEntries(),
	output: {
		path: path.resolve( __dirname, settings.paths.dist.base ),
		filename: settings.filename.js,
	},

	// Console stats output.
	// @link https://webpack.js.org/configuration/stats/#stats
	stats: settings.stats,

	// External objects.
	externals: {
		jquery: 'jQuery',
	},

	// Performance settings.
	performance: {
		maxAssetSize: 100000,
	},

	// Build rules to handle asset files.
	module: {
		rules: [

			// Scripts.
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env' ],
							cacheDirectory: true,
							sourceMap: ! isProduction,
						},
					},
				],
			},

			// Styles.
			{
				test: /\.css$/,
				include: path.resolve( __dirname, settings.paths.src.css ),
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// This is needed for fonts URL for example.
							// url( 'fonts/' ) becomes url( '../fonts/' ) in dist/css/style.css.
							publicPath: '../',
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: ! isProduction,
						},
					},
				],
			},

			// Fonts.
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: settings.paths.dist.fonts,
						},
					},
				],
			},
		],
	},

	plugins: [

		// Friendlier errors.
		new FriendlyErrorsWebpackPlugin(),

		// Remove the extra JS files Webpack creates for Sass entries.
		// This should be fixed in Webpack 5.
		new FixStyleOnlyEntriesPlugin( {
			silent: true,
		} ),

		// Clean the `dist` folder on build.
		new CleanWebpackPlugin( path.resolve( __dirname, settings.paths.dist.base ), {
			verbose: false,
		} ),

		// Create our cache busting asset manifest.
		new ManifestPlugin( {
			// Filter using only .js and .css files.
			filter: ( { name } ) => name.endsWith( '.js' ) || name.endsWith( '.css' ),
			map: ( file ) => {
				// Add hash details on production for cache busting.
				return {
					name: file.path,
					path: isProduction && file.chunk ? `${ file.path }?id=${ file.chunk.hash }` : file.path,
				};
			},
		} ),

		// Extract CSS into individual files.
		new MiniCssExtractPlugin( {
			filename: settings.filename.css,
			chunkFilename: '[id].css',
		} ),

		// Copy static assets to the `dist` folder.
		new CopyWebpackPlugin( [
			{
				from: settings.copyWebpackConfig.from,
				to: settings.copyWebpackConfig.to,
				context: path.resolve( __dirname, settings.paths.src.base ),
			},
		] ),

		// Minify and optimize image/SVG files.
		new ImageminPlugin( {
			test: /\.(jpe?g|png|gif|svg)$/i,
			optipng: {
				optimizationLevel: 7,
			},
			gifsicle: {
				optimizationLevel: 3,
			},
			pngquant: {
				quality: '65-90',
				speed: 4,
			},
			svgo: {
				plugins: [
					{ removeUnknownsAndDefaults: false },
					{ cleanupIDs: false },
					{ removeViewBox: false },
					{
						addAttributesToSVGElement: {
							attributes: [
								{ focusable: 'false' },
								{ 'aria-hidden': 'true' },
								{ role: 'img' },
							],
						},
					},
					{
						addClassesToSVGElement: {
							classNames: [ 'svg' ],
						},
					},
				],
			},
			plugins: [ imageminMozjpeg( { quality: 75 } ) ],
		} ),
	],
};
