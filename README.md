[![Build Status](https://travis-ci.org/samikeijonen/uuups.svg?branch=master)](https://travis-ci.org/samikeijonen/uuups)

# Uuups &ndash; experimental WordPress Theme

Uuups is an experiment how to bring your theme to the next level.

1. The theme uses modern PHP, JS, CSS, and other tools.
1. The theme also attempts to stick with WP standards so that it doesn't feel too foreign.

This is playground from two starter themes:

1. [Justin Tadlock's starter theme](https://github.com/justintadlock/abc)
1. [Mine starter theme called Foxer](https://github.com/justintadlock/abc)

All the ideas are still open and there are no documentation.

## Demo

[Demo can be seen in Foxland site](https://foxland.fi/demo/uuups/).

## My wishlist

I have hopes and dreams for the starter theme:

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

### Setup script

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

You can configure Gulp related settings
in the `gulp-config.js` file. Change at least `projectURL`
to match your local environment URL. This will be needed
if you use Browsersync feature by running `gulp watch`.

You can also change files names or folder structure but it's not recommended.

Run `gulp watch` to activate build process in the background. You'll get development proxy at http://localhost:3000 where changes to the code will be updated automatically to browser.

Tip: Press `ctrl` + `c` to quit build process.

All tasks:

- `gulp watch` &ndash; Automatically handle changes to CSS, JS, SVGs, and images. Also kicks off BrowserSync.
- `gulp scripts` &ndash; Minify javascript files from `resources/scripts/` to `dist/scripts/`.
- `gulp styles` &ndash; Compile, prefix, combine media queries, and minify CSS files from `resources/styles/` to `dist/styles/`.
- `gulp icons` &ndash; Minify and clean SVG icons and create SVG sprite from `resources/svg-icons/*.svg` to `dist/images/svg-icons.svg`.
- `gulp i18n` &ndash; Scan the theme and create a POT file
to`resources/lang/` folder.
- `gulp sass:lint` &ndash; Run SASS against WordPress coding standards.
- `gulp js:lint` &ndash; Run Javascript against WordPress coding standards.
- `gulp docs` &ndash; Create SASS docs which can be seen in [Uuups Github pages](https://samikeijonen.github.io/uuups/).
- `gulp imagemin` &ndash; Compress images
from `resources/images/` to `dist/images/`.
- `gulp` &ndash; Run tasks in this order: `i18n`, `icons`,
`styles`, `scripts`, `imagemin`, `docs`.

## SASS and CSS structure

SASS and CSS structure is probably one of
the biggest aspects of the front-end and theming.
It should have scalable and modular architecture.

Styles are written in `resources/styles` folder.
There are two separate stylesheets
which are automatically compiled to `dist/styles`:

- `style.scss` &ndash; Main stylesheet for the theme.
- `blocks.scss` &ndash; Stylesheet only for the new editor (Gutenberg).

Actually all the files in `resources/styles/*.scss`
are outputted in the `dist/styles/*.css` during build process.

### Main stylesheet

Main stylesheet `style.scss` follows [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) approach and [BEM](http://getbem.com/) naming convention.

The main point of ITCSS is that it separates
your CSS codebase to several sections (layers).
It guides you to write CSS from low-specificity selectors to more specific ones.

It also plays nicely with the new editor (Gutenberg)
because block styles can be one of the layers.

We should write separate documentation about SASS and CSS,
it's that important.

### Styles for the editor

`blocks.scss` tries to put all the necessary styles
to the new editor.

Note a little trick where we prefix all the styles
with class `edit-post-visual-editor`:

```css
// Editor styles.
.edit-post-visual-editor {
	// Write custom CSS.
	// Or import parts of the SASS.
	// @import "elements/blockquote";
	// @import "elements/hr";
}
```

## New editor (Gutenberg) support

At the moment support for new editor means these things to me:

- Add support `editor-color-palette` to match theme colors.
- Add support for `align-wide` blocks.
- Dequeue Core block styles: `wp_dequeue_style( 'wp-blocks' )`.
	- This is because I don't want to overwrite and add too spesific rules to main stylesheet.
	- Core blocks have their own CSS layer as mentioned before. It can be found in `recources/styles/blocks`.
- Get maximum WYSIWYG experience in the editor by
enqueueing block related styles using `enqueue_block_editor_assets` hook.

See previous chapter [styles for the editor](#styles-for-the-editor).

## Coding standards and linting

Theme mostly follows [WordPress coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/). There are couple of things you need to install in your
machine.

1. [Install PHP CodeSniffer](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) to validate code developed for WordPress.
1. [Install PHP Compatibility](https://github.com/wimg/PHPCompatibility) check for PHP CodeSniffer.
1. [Install PHPCS and WPCS to your IDE](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards#using-phpcs-and-wpcs-from-within-your-ide).

In `phpcs.xml` there is custom PHP rulesets (sniffs) which are based on Underscores rulesets.

### Run your code automatically through Travis CI

When you commit changes in Github, let [Travis CI](https://travis-ci.org/) run and test your code.

File `.travis.yml` is the configuration file for setting up Travis. It's also based on Underscores configuration.

### Style linting

Gulp task `gulp sass:lint` checks SASS files using [stylelint](https://github.com/stylelint/stylelint).

File `.stylelintrc` is the configuration file for stylelint.

I also recommend installing stylelint extension to your IDE, for example [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint).

### JavaScript linting

Gulp task `gulp js:lint` checks SASS files using [ESLint](https://eslint.org/).

File `.eslintrc.js` is the configuration file for ESLint. And `.eslintignore` file for what files to ignore from linting.

I also recommend installing ESLint extension to your IDE, for example [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Editorconfig

Theme has an `.editorconfig` file that sets your code editor settings accordingly. [Download the extension to your editor](http://editorconfig.org/#download). The settings will automatically be applied when you edit code when you have the extension.

## SASS docs

Running `gulp docs` creates [sassdocs](http://sassdoc.com/) in `docs` folder. At the moment I'm
testing [Herman sassdoc theme](https://github.com/oddbird/sassdoc-theme-herman).

The end [result can be seen in Github pages](https://samikeijonen.github.io/uuups/). This is nowhere near of design system but it's a nice start.

## SVG system

All the main SVG related functions can be found in the `app/functions-icons.php` file. It’s well-documented in the code, but here’s a summary:

- Add SVG icons in `resources/svg-icons` folder. From these icons build tools creates SVG sprite file in `dist/images/svg-icons.svg`.
- Include the SVG sprite file via the `wp_footer` hook.
- `get_svg()` function returns the SVG icon markup.
- For example `get_svg( [ 'icon' => 'angle-down' ] )`.
- Icons can be used in social links menu, in dropdown menu, you name it.

## FAQ

> What about sidebars?

For old themes I probably would not try to add align-wide support if child themes can be broken.

For new themes you can definitely have "wide" and "full-width" blocks even if there is sidebar on the right or left.

Yeah but how? Using CSS :)
