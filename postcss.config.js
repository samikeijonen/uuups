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
		// Prefix editor styles with class `editor-styles-wrapper`.
		'postcss-prefix-selector': 'editor.css' === file.basename ?
			{
				prefix: '.editor-styles-wrapper',
				exclude: [
					':root',
					'.editor-styles-wrapper'
				]
			} : false,
		autoprefixer: 'production' === env,
		cssnano: 'production' === env
	}
});
