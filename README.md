[![Build Status](https://travis-ci.org/samikeijonen/uuups.svg?branch=master)](https://travis-ci.org/samikeijonen/uuups)

# Uuups &ndash; experimental WordPress Theme

Uuups is an experiment how to bring your theme to the next level.

1. The theme uses modern PHP, JS, CSS, and other tools.
1. The theme also attempts to stick with WP standards so that it doesn't feel too foreign.

This is playground from two starter themes:

1. [Justin Tadlock's starter theme](https://github.com/justintadlock/abc)
1. [Mine starter theme called Foxer](https://github.com/samikeijonen/foxer)

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

## My workflow

I'll work on `dev` branch where I keep un-minified CSS, JS, SVGs etc. In `master` all assets are cleaned and compile when running `npm run build`.

In other words `master` branch is ready for production.

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

### Creating new theme

WordPress themes lives in the `wp-content/themes` folder. This is where we fetch our starter theme files.

```
# Go to the `themes` directory of your WordPress installation.
cd wp-content/themes
```

You can download files from this repo or clone the repository to the `wp-content/themes` directory.

```
git clone -b master git@github.com:samikeijonen/uuups.git <theme-name>
```

Make sure you’re in the root folder of your theme.

```
cd <theme-name>
```

#### Run setup script

Run setup wizard in theme root with bash command

```
sh setup.sh
```

You'll be asked three questions:

1. Theme name (Default: "Uuups").
1. Unique id for your theme name. Like `uuups` or `super-cool`. Use only lowercase `a-z` and `-`. (Default: uuups).
1. Local development url is used by Browsersync and can be manually changed in `/resources/build/config.js`.

In Windows you might need to install [Cygwin](https://www.cygwin.com/) or
similar tool to run `sh` script.

Or you can do search and replace:

1. Search for `'uuups'` (inside single quotations) to capture the text domain.
1. Search for `Text Domain: uuups` in style.css.
1. Search for ` Uuups` (with a space before it) to capture DocBlocks.
1. Search for `Uuups` to capture all the namespaces.
1. Search for `uuups-` to capture prefixed handles.

#### Install composer dependencies.

```
composer install
```

#### Install node dependencies using either NPM or Yarn.

**NPM command:**
```
npm install
```

**Yarn command:**
```
yarn install
```

#### Active theme

Activate your theme under `Appearance > Themes`. Or use WP-CLI to activate your theme.

```
wp theme activate <theme-name>
```

## Webpack tasks

In this theme experiment I use [Webpack](https://webpack.js.org/) tasks for automated processes.

You can configure Webpack related settings
in the `resources/build/config.js` file. Change at least `proxy`
setting in browserSync to match your local environment URL. This will be needed if you use Browsersync feature by running `npm run watch`.

You can also change folder structure but it's not recommended.

Run `npm run watch` to activate build process in the background. You'll get development proxy at http://localhost:3000 where changes to the code will be updated automatically to browser.

Tip: Press `ctrl` + `c` to quit build process.

All tasks:

- `npm run watch` &ndash; Automatically watch changes to CSS, JS, and PHP. Also kicks off BrowserSync.
- `npm run dev` &ndash; Output assets like CSS, JS, images, SVGs to `dist` folder.
- `npm run lint` &ndash; Run SASS and JS against WordPress coding standards.
	- `npm run lint:styles` &ndash; Run SASS against WordPress coding standards.
	- `npm run lint:scripts` &ndash; Run Javascript against WordPress coding standards.
- `nmp run docs` &ndash; Create SASS docs which can be seen in [Uuups Github pages](https://samikeijonen.github.io/uuups/).
- `npm run build` &ndash; Minify and compress assets like CSS, JS, images, SVGs to `dist` folder. Run this when you're ready for production.

## Accessibility testing

[Pa11y](https://github.com/pa11y/pa11y) runs your code against [HTML CodeSniffer](http://squizlabs.github.com/HTML_CodeSniffer/). Check documentation from `pa11y` site.

On the command line test any local or live URL:

```
pa11y http://example.com/
```

I recommend also [aXe browser add-on](https://www.deque.com/aXe/) or [aXe-CLI](https://github.com/dequelabs/axe-cli).

More info about [Frontend checks for web accessibility](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility/test-for-web-accessibility-frontend-code/).

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

## Template files

We try to avoid having lot's of similar template files
in the root folder. In fact, in root there is only `index.php` template file but that should never be loaded unless plugins do some weird things.

Main fallback template file is found in `resources/views/index.php`.

All the template files are also in `resources/views/` folder. In there template files are
organized in sub-folder using `Hybrid\render_view()` and
`Hybrid\get_template_hierarchy()` functions.

You could have other top-level templates, like `page.php`, `archive.php`, etc. in the root of `resources/views/` folder and get used like they typically would in theme root. But we try to avoid that also by organizing template
files in different folders.

### Hybrid\render_view() function

`Hybrid\render_view()` is Hybrid Core function which is
more powerfull version of `get_template_part()` function. You can for example pass variables to it:

```php
// Hybrid\render_view( $name, $slugs = [], $data = [] )
Hybrid\render_view( 'menu', 'primary', [ 'name' => 'primary' ] );
```

- Above code loads `resources/views/menu/primary.php` file.
- If it doesn't exists it fallbacks to `resources/views/menu/default.php` file.
- And if it doesn't exists it fallbacks to `resources/views/menu.php` file.

Hierarchy looks like this:

```php
// Hybrid\render_view( 'menu', 'primary', [ 'name' => 'primary' ] ) hierarchy.
// 1. resources/views/menu/primary.php
// 2. resources/views/menu/default.php
// 3. resources/views/menu.php
```

The last parameter `[ 'name' => 'primary' ]` is for passing data in to template file. You can access the data like this `$data->name`.

### Hybrid\get_template_hierarchy() function

Let's look at example line: `Hybrid\render_view( 'content', Hybrid\get_template_hierarchy() );`

This loads template files from `resources/views/content` folder respecting the [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/).

```php
// Example hierarchy for single `download` post type.
// 1. resources/views/content/single-download-{slug}.php
// 2. resources/views/content/single-download.php
// 3. resources/views/content/single.php
// 4. resources/views/content/singular.php
// 5. resources/views/content/index.php
// 6. resources/views/index.php
```



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

NPM task `npm run lint:styles` checks SASS files using [stylelint](https://github.com/stylelint/stylelint).

File `.stylelintrc` is the configuration file for stylelint.

I also recommend installing stylelint extension to your IDE, for example [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint).

### JavaScript linting

NPM task `npm lint:scripts` checks SASS files using [ESLint](https://eslint.org/).

File `.eslintrc.js` is the configuration file for ESLint. And `.eslintignore` file for what files to ignore from linting.

I also recommend installing ESLint extension to your IDE, for example [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Editorconfig

Theme has an `.editorconfig` file that sets your code editor settings accordingly. [Download the extension to your editor](http://editorconfig.org/#download). The settings will automatically be applied when you edit code when you have the extension.

## SASS docs

Running `npm run docs` creates [sassdocs](http://sassdoc.com/) in `docs` folder. At the moment I'm
testing [Herman sassdoc theme](https://github.com/oddbird/sassdoc-theme-herman).

The end [result can be seen in Github pages](https://samikeijonen.github.io/uuups/). This is nowhere near of design system but it's a nice start.

## SVG system

All the main SVG related functions can be found in the `app/functions-svg.php` file. It’s well-documented in the code, but here’s a summary:

- Add SVG icons in `resources/svg` folder. `npm run dev` copies these SVG files in `dist/svg` folder.
- When ready for production, `npm run build` cleans all the SVG files.
- `Hybrid\get_svg()` function returns inline SVG icon markup by default.
- For example `Hybrid\get_svg( 'angle-down.svg' )`.
- Or with arguments: `Hybrid\get_svg( 'angle-down.svg', [ 'title' => 'This is title', 'desc' => 'This is desc' ] );`.
- SVG icons are automatically used in Social links menu.

## FAQ

> What about sidebars?

For old themes I probably would not try to add align-wide support if child themes can be broken.

For new themes you can definitely have "wide" and "full-width" blocks even if there is sidebar on the right or left.

Yeah but how? Using CSS :)

## Other starter themes

Check out

- [Tonik](https://github.com/tonik/theme/).
- [Sage](https://github.com/roots/sage/).
