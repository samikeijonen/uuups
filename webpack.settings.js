// webpack.settings.js - webpack settings config.

// Webpack settings exports.
module.exports = {
	entries: {
		'app': './resources/js/app.js',
		'customizeControls': './resources/js/customize-controls.js',
		'customizePreview': './resources/js/customize-preview.js',
		'style': './resources/css/style.css',
		'editor': './resources/css/editor.css'
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css'
	},
	paths: {
		src: {
			base: './resources/',
			css: './resources/css/',
			js: './resources/js/'
		},
		dist: {
			base: './dist/',
			clean: [
				'./img',
				'./css',
				'./js'
			]
		},
		templates: './templates/'
	},
	urls: {
		live: 'https://example.com/',
		local: 'http://example.test/',
		critical: 'http://example.test/',
		publicPath: '/dist/'
	},
	vars: {
        cssName: 'styles'
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]'
	},
	devServerConfig: {
		public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8080',
		host: () => process.env.DEVSERVER_HOST || 'localhost',
		poll: () => process.env.DEVSERVER_POLL || false,
		port: () => process.env.DEVSERVER_PORT || 8080,
		https: () => process.env.DEVSERVER_HTTPS || false
	},
	manifestConfig: {
		basePath: ''
	}
};
