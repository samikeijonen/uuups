[![Build Status](https://travis-ci.org/samikeijonen/uuups.svg?branch=master)](https://travis-ci.org/samikeijonen/uuups)

# Uuups &ndash; experimental WordPress Theme

Uuups is an experiment how to bring your theme to the next level. This is playground from two starter themes:

1. [Justin Tadlock's starter theme](https://github.com/justintadlock/abc)
1. [Mine starter theme called Foxer](https://github.com/justintadlock/abc)

All the ideas are still open and there are no documentation.

## My wishlist

I have hopes and dreames for the starter theme:

- Accessibility ready out of the box.
- Clean semantic HTML without lots of extra DIVs
- Scalable, modular CSS/SASS architecture. It should guide developers how they write their CSS.
- Ready for Gutenberg and a maximum WYSIWYG experience.
- ES6 for JavaScript.
- Gulp, Webpack, or npm scripts for automated tasks like    - compiling assets.
  - optimising images and SVGs.
  - CSS, JS, and PHPCS linting.
  - SVG system.
  - being design system ready.

## Directory structure

Directory structure aims to be modern app-like, what ever that means :)

- `resources` folder is for editing theme for your needs. This is where the most of the magic happens.
	- `resources/views` have all the template structure and partials files.
	- `resources/styles` have SASS files.
	- `resources/scripts` have JS files.
	- `resources/svg-icons` have SVG icons.
	- `resources/lang` have language files.
- `app` folder is for theme related functions and classes. Classes are loaded automatically but `functions-files` needs to be added manually via `functions.php`.
- `dist` folder has processed and optimized assets ready to be included to theme. Do not edit or add anything to `dist` folder. It is processed automatically via task tools like Webpack or Gulp.

## Installation and setup

Starter theme uses [Composer](https://getcomposer.org/) and [NPM](https://www.npmjs.com/) to manage its dependencies. Install both on your machine before using this starter theme.

Theme has [Hybrid Core 5.0](https://github.com/justintadlock/hybrid-core/tree/5.0) as a must have dependency.

## Setup script

We should have [setup script](https://github.com/justintadlock/abc/issues/6) that handles all the search/replace.

Or similar how [Tonik can be installed via composer](http://labs.tonik.pl/theme/docs/installation/).

### Creating new theme

WordPress themes lives in the `wp-content/themes` folder. This is where we fetch our starter theme files.

```
# Go to the `themes` directory of your WordPress installation.
$ cd wp-content/themes
```

You can download files from this repo or clone the repository to the `wp-content/themes` directory.

```
$ git clone -b master git@github.com:samikeijonen/uuups.git <theme-name>
```

Make sure you’re in the root folder of your theme.

```
$ cd <theme-name>
```

#### Install composer dependencies.

```
$ composer install
```

#### Install node dependencies.

```
$ npm install
```

#### Active theme

Activate your theme under `Appearance > Themes`. Or use WP-CLI to activate your theme.

```
wp theme activate <theme-name>
```

## Gulp tasks

Note that ABC theme have webpack. In this theme experiment I still use [Gulp](https://gulpjs.com/) tasks for automated processes.

- `gulp watch` &ndash; Automatically handle changes to CSS, JS, SVGs, and images. Also kicks off BrowserSync.
- `gulp scripts` &ndash; Minify javascript files.
- `gulp styles` &ndash; Compile, prefix, combine media queries, and minify CSS files.
- `gulp icons` &ndash; Minify and clean SVG icons and create SVG sprite.
- `gulp i18n` &ndash; Scan the theme and create a POT file.
- `gulp sass:lint` &ndash; Run SASS against WordPress coding standards.
- `gulp js:lint` &ndash; Run Javascript against WordPress coding standards.
- `gulp docs` &ndash; Run Javascript against WordPress coding standards.

You can configure Gulp related settings in the `gulp-config.js` file.

