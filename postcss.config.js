/**
 * Exports the PostCSS configuration.
 *
 * @return {string} PostCSS options.
 */
module.exports = ( { file, options, env } ) => ( { /* eslint-disable-line */
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 0,
		},
		'postcss-mixins': {},
		'postcss-nested': {},
		// Prefix editor styles with class `editor-styles-wrapper`.
		'postcss-editor-styles': 'editor.css' === file.basename ?
			{
				scopeTo: '.editor-styles-wrapper',
				ignore: [
					':root',
					'.edit-post-visual-editor.editor-styles-wrapper',
				],
				remove: [
					'html',
					':disabled',
					'[readonly]',
					'[disabled]',
				],
				tags: [
					'button',
					'input',
					'label',
					'select',
					'textarea',
					'form',
				],
			} : false,
		// Minify style on production using cssano.
		cssnano: 'production' === env ?
			{
				preset: [
					'default',
					{ discardComments: { removeAll: true } },
				],
			} : false,
	},
} );
