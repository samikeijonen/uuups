const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					ie8: false,
					ecma: 5,
					output: {
						comments: false,
						beautify: false
					},
					warnings: false
				}
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [ 'default', { discardComments: { removeAll: true } } ]
				},
				canPrint: false
			})
		]
	}
});
