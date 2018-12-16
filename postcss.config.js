// Config files.
const settings = require('./webpack.settings.js');

/**
 * Exports the PostCSS configuration.
 */
module.exports = ({ file, options, env }) => ({
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 0
		},
		'postcss-mixins': {},
		'postcss-nested': {},
		'postcss-custom-properties': {
			preserve: false,
			importFrom: [
				settings.vars.colors
			]
		},
		// Prefix editor styles with class `editor-styles-wrapper`.
		'postcss-editor-styles': 'editor.css' === file.basename ?
			{
				scopeTo: '.editor-styles-wrapper',
				ignore: [
					':root',
					'.edit-post-visual-editor.editor-styles-wrapper'
				],
				remove: [
					'html',
					':disabled',
					'[readonly]',
					'[disabled]'
				]
			} : false,
		// Minify style on production using cssano.
		'cssnano': 'production' === env ?
			{
				'preset': [
					'default',
					{ 'discardComments': { 'removeAll': true } }
				]
			} : false
	}
});
