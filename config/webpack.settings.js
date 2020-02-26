/* global module, process */

// Webpack settings exports.
module.exports = {
	entries: {
		app: './assets/js/app.js',
		editorScripts: './assets/js/editor.js',
		customizeControls: './assets/js/customize-controls.js',
		customizePreview: './assets/js/customize-preview.js',
		style: './assets/css/style.css',
		editor: './assets/css/editor.css',
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css',
	},
	paths: {
		src: {
			base: './assets/',
			css: './assets/css/',
			js: './assets/js/',
		},
		dist: {
			base: './dist/',
			clean: [
				'./img',
				'./css',
				'./js',
			],
		},
		templates: './templates/',
	},
	urls: {
		live: 'https://example.com/',
		local: 'http://example.test/',
		critical: 'http://example.test/',
		publicPath: '/dist/',
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true,
	},
	vars: {
		cssName: 'styles',
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]',
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'foxlandhub.test',
		open: false,
		files: [
			'*.php',
			'app/**/*.php',
			'assets/views/**/*.php',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/svg/**/*.svg',
			'dist/img/**/*.{jpg,jpeg,png,gif}',
			'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}',
		],
	},
	devServerConfig: {
		public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8080',
		host: () => process.env.DEVSERVER_HOST || 'localhost',
		poll: () => process.env.DEVSERVER_POLL || false,
		port: () => process.env.DEVSERVER_PORT || 8080,
		https: () => process.env.DEVSERVER_HTTPS || false,
	},
	manifestConfig: {
		basePath: '',
	},
	release: {
		folder: './releases',
		files: [
			'changelog.md',
			'functions.php',
			'index.php',
			'license.md',
			'readme.md',
			'screenshot.png',
			'style.css',
			'{app,dist,assets}/**',
			'vendor/autoload.php',
			'vendor/composer/*.php',
			'vendor/justintadlock/hybrid-core/**',
		],
	},
};
