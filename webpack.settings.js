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
		colors: './config/colors.json',
        cssName: 'styles'
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]'
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'foxlandhub.test',
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
