const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-cheap-module-source-map',
	plugins: [
		// Run BrowserSync.
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'foxland-products.test',
				open: false,
				files: [
					'*.php',
					'app/**/*.php',
					'resources/views/**/*.php',
					'dist/js/**/*.js',
					'dist/css/**/*.css',
					'dist/svg/**/*.svg',
					'dist/img/**/*.{jpg,jpeg,png,gif}',
					'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}'
				]
			},
			{
				injectCss: true,
				reload: false
			}
		)
	]
});
