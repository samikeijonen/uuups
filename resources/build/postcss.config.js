/**
 * Exports the PostCSS configuration.
 */
module.exports = ( { file, options, env } ) => ( {
        plugins : {
                'postcss-import' : {},
                'postcss-cssnext' : {
			features: {
				customProperties: {
					// Preserve custom properties.
					// @link: https://github.com/postcss/postcss-custom-properties#preserve
					preserve: 'true',
				}
			}
		},
                'autoprefixer'    : env === 'production',
                'cssnano'         : env === 'production'
        }
} );
