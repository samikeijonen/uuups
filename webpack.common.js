const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = 'production' === process.env.NODE_ENV;

module.exports = {
	entry: {
		app: './resources/js/app.js',
		style: './resources/css/style.css',
		editor: './resources/css/editor.css'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},

	// Console stats output.
	// @link https://webpack.js.org/configuration/stats/#stats
	stats: 'minimal',

	// External objects.
	externals: {
		jquery: 'jQuery'
	},

	// Performance settings.
	performance: {
		hints: false
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
							sourceMap: ! isProduction
						}
					}
				]
			},

			// Styles.
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'resources/css'),
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: ! isProduction
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: ! isProduction,
							config: {
								path: 'postcss.config.js'
							}
						}
					}
				]
			}
		]
	},

	plugins: [

		// Friendlier errors.
		new FriendlyErrorsWebpackPlugin(),

		// Remove the extra JS files Webpack creates for Sass entries.
		// This should be fixed in Webpack 5.
		new FixStyleOnlyEntriesPlugin({
			silent: true
		}),

		// Clean the `dist` folder on build.
		new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {
			verbose: false
		}),

		// Create our cache busting asset manifest.
		new ManifestPlugin({
			map: (file) => {
				const extension = path.extname(file.name).slice(1);

				// Add hash details on production for cache busting.
				return {
					name: file.path,
					path: [ 'css', 'js' ].includes(extension) && isProduction ?
					`${file.path}?id=${file.chunk.hash}` :
					file.path
				};
			}
		}),

		// Extract CSS into individual files.
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css'
		}),

		// Copy static assets to the `dist` folder.
		new CopyWebpackPlugin([
			{
				from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
				to: '[path][name].[ext]',
				context: path.resolve(__dirname, './resources')
			}
		]),

		// Minify and optimize image/SVG files.
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			optipng: {
				optimizationLevel: 7
			},
			gifsicle: {
				optimizationLevel: 3
			},
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
						}
					},
					{
						addClassesToSVGElement: {
							classNames: [ 'svg' ]
						}
					}
				]
			},
			plugins: [ imageminMozjpeg({ quality: 75 }) ]
		}),

		// Cache for improved concurrent builds.
		new HardSourceWebpackPlugin({
			info: {
				level: 'warn'
			}
		})
	]
};
