[![Build Status](https://travis-ci.org/samikeijonen/uuups.svg?branch=dev)](https://travis-ci.org/samikeijonen/uuups)

# Uuups &ndash; experimental WordPress Theme

Uuups is an experiment how to bring your theme to the next level.

1. The theme uses modern PHP, JS, CSS, and other tools.
1. The theme also attempts to stick with WP standards so that it doesn't feel too foreign.

## Version from Mythic

This is my playground from [Justin Tadlock's starter theme called Mythic](https://github.com/justintadlock/mythic). Most of the code is the same
but I have small experiments here and there.

## Documentation

Read [documentation from Mythic Wiki](https://github.com/justintadlock/mythic/wiki).

## Demo

[Demo can be seen in Foxland site](https://foxland.fi/demo/uuups/).

## My wishlist

I have hopes and dreams for the starter theme:

- Accessibility ready out of the box.
- Clean semantic HTML without lots of extra DIVs
- Scalable, modular CSS/SASS architecture. It should guide developers how they write their CSS.
- Ready for Gutenberg and a maximum WYSIWYG experience.
- ES6 for JavaScript.
- Gulp, Webpack, or npm scripts for automated tasks like - compiling assets.
  - optimising images and SVGs.
  - CSS, JS, and PHPCS linting.
  - SVG system.
- Being design system ready.

## My workflow

I'll work on `dev` branch where I keep un-minified CSS, JS, SVGs etc. In `master` all assets are cleaned and compile when running `npm run build`.

In other words `master` branch is ready for production.

## Accessibility testing

[Pa11y](https://github.com/pa11y/pa11y) runs your code against [HTML CodeSniffer](http://squizlabs.github.com/HTML_CodeSniffer/). Check documentation from `pa11y` site.

On the command line test any local or live URL:

```
pa11y http://example.com/
```

I recommend also [aXe browser add-on](https://www.deque.com/aXe/) or [aXe-CLI](https://github.com/dequelabs/axe-cli).

More info about [Frontend checks for web accessibility](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility/test-for-web-accessibility-frontend-code/).

## CSS structure

CSS structure is probably one of
the biggest aspects of the front-end and theming.
It should have scalable and modular architecture.

Styles are written in `resources/css` folder.
There are two separate stylesheets
which are automatically compiled to `dist/css`:

- `style.scss` &ndash; Main stylesheet for the theme.
- `editor.scss` &ndash; Stylesheet only for the block editor (Gutenberg).

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

`editor.scss` tries to put all the necessary styles
to the new editor without re-writing front-end styles.

Note a little trick where we prefix all the styles
with class `editor-styles-wrapper` using `postcss-editor-styles` plugin.

## New editor (Gutenberg) support

At the moment support for new editor means these things to me:

- Add support for `editor-color-palette` to match theme colors.
- Add support for `editor-font-sizes` to match theme font sizes.
- Add support for `align-wide` blocks.
- Dequeue Core block styles:
	- This is because I don't want to overwrite and add too spesific rules to main stylesheet.
	- Core blocks have their own CSS layer as mentioned before. It can be found in `recources/css/blocks`.
- Get maximum WYSIWYG experience in the editor by
enqueueing block related styles using `enqueue_block_editor_assets` hook.

See previous chapter [styles for the editor](#styles-for-the-editor).

## Coding standards and linting

Theme mostly follows [WordPress coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/).

There is `pre-commit` hook which runs PHP, Style, and JavaScript linting before new commits can be pushed to repo.

For example if there are changes in CSS files, it runs `npm run lint:css` before the commit.

You can use `--no-verify` flag to bypass linting check:

```bash
git commit --no-verify -m "Your commit message."
```

All lints can be run by command `npm run lint`. Or use any of the following lint commands.

### PHP linting

NPM task `npm run lint:php` checks PHP files using [WordPress coding standars (WPCS)](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards). In `.phpcs.xml.dist` there is custom PHP ruleset `Foxland-Default` which extends `WPCS`. This is loaded via [composer package](https://packagist.org/packages/samikeijonen/phpcs-composer).

### Style linting

NPM task `npm run lint:css` checks CSS files using [stylelint](https://github.com/stylelint/stylelint).

File `.stylelintrc` is the configuration file for stylelint.

I also recommend installing stylelint extension to your IDE, for example [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint).

### JavaScript linting

NPM task `npm lint:js` checks JS files using [ESLint](https://eslint.org/).

File `.eslintrc.js` is the configuration file for ESLint. And `.eslintignore` file for what files to ignore from linting.

I also recommend installing ESLint extension to your IDE, for example [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Run your code automatically through Travis CI

When you commit changes in Github, let [Travis CI](https://travis-ci.org/) run and test your code.

File `.travis.yml` is the configuration file for setting up Travis.

### Editorconfig

Theme has an `.editorconfig` file that sets your code editor settings accordingly. [Download the extension to your editor](http://editorconfig.org/#download). The settings will automatically be applied when you edit code when you have the extension.

## New version

Generate `.zip` file using command:

```
npm run release --  --version={version-number}
```

For example:

```
npm run release --  --version=1.0.0
```

This will generate zip file `releases/uuups-1.0.0.zip`.

## SVG system

All the main SVG related functions can be found in the `app/functions-svg.php` file. It’s well-documented in the code, but here’s a summary:

- Add SVG icons in `resources/svg` folder. `npm run dev` or `npm run build` copies these SVG files in `dist/svg` folder.
	- In the same cleans them up.
	- Adds attributes and classes for using these icons as decorative only.
- `Uuups\get_svg()` function returns inline SVG icon markup by default.
- For example `Uuups\get_svg( [ 'icon' => 'folder-open' ]`.
- SVG icons are automatically used in Social links menu.

If the SVG is not decorative, add SVG markup directly in the markup.

## FAQ

> What about sidebars?

For old themes I probably would not try to add align-wide support if child themes can be broken.

For new themes you can definitely have "wide" and "full-width" blocks even if there is sidebar on the right or left.

Yeah but how? Using CSS :)

## Other starter themes

Check out

- [Tonik](https://github.com/tonik/theme/).
- [Sage](https://github.com/roots/sage/).
