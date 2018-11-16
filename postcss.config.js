/**
 * Exports the PostCSS configuration.
 */
module.exports = ({ file, options, env }) => ({
	plugins: {
		'postcss-import': {},
		'postcss-mixins': {},
		'postcss-nested': {},
		'postcss-preset-env': {
			stage: 0
		},
		//'postcss-prefix-selector': 'editor' === ctx.env ? {scopeTo: '.editor-styles-wrapper'} : false,
		autoprefixer: 'production' === env,
		cssnano: 'production' === env
	}
});
