'use strict';

/* globals module */
module.exports = {
	plugins: [],
	env: {
		browser: true,
		jquery: true,
		es6: true,
	},

	/**
	 * Default globals.
	 *
	 * These will get ignored automatically.
	 *
	 * @since  1.1
	 */
	globals: {
		_: false,
		Backbone: false,
		jQuery: false,
		JSON: false,
		wp: false,
	},

	/**
	 * Make sure you have eslint-config-wordpress installed.
	 *
	 * Install using:
	 *
	 *     npm install -g eslint-config-wordpress
	 *
	 * @since 1.1
	 */
	extends: 'wordpress',

	/**
	 * WDS & WordPress Coding Standards for JavaScript.
	 *
	 * These are the official WDS and WordPress coding standards
	 * for JavaScript.
	 *
	 * The @standard tag tells you which one's are straight from
	 * WordPress Core, and which one's are WDS's own.
	 *
	 * @since  1.1
	 * @see    https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/
	 */
	rules: {
		/**
		 * Disallow or enforce trailing commas.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#objects
		 *
		 * @author Aubrey Portwood
		 * @since 1.0
		 */
		'comma-dangle': ['error', 'never'],

		/**
		 * Encourages use of dot notation whenever possible.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#objects
		 *
		 * @author Aubrey Portwood
		 * @since 1.0
		 */
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '^[a-z]+(_[a-z]+)+$',
			},
		],

		/**
		 * Require or disallow space before blocks.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#spacing
		 *
		 * @author Aubrey Portwood
		 * @since  1.1
		 */
		'space-in-parens': ['error', 'always'],

		/**
		 * Don't force vars to be on top.
		 *
		 * In contradiction to WP Coding Standards,
		 * we do not require this.
		 *
		 * @standard WDS
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#declaring-variables-with-var
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'vars-on-top': 'off',

		/**
		 * Always show an error when a variable is created that is never used.
		 *
		 * @standard WP
		 *
		 * @author Aubrey Portwood
		 * @since  1.1
		 */
		'no-unused-vars': 'error',

		/**
		 * No use of console.
		 *
		 * Use of console can be done safely with checking
		 * window.console and running it from there.
		 *
		 * @standard WDS
		 *
		 * @author Aubrey Portwood
		 * @since  1.1
		 */
		'no-console': 'error',

		/**
		 * No use of debugger.
		 *
		 * This is because we often can leave it in the code,
		 * this draws a nice red line around it.
		 *
		 * @standard WDS
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'no-debugger': 'error',

		/**
		 * Require valid jsdoc blocks.
		 *
		 * @standard WDS
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'valid-jsdoc': [
			'error',
			{
				// If and only if the function or method has a return statement (this option value does apply to constructors)
				requireReturn: false,
			},
		],

		/**
		 * Require docblocks.
		 *
		 * @standard WDS
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'require-jsdoc': 'error',

		/**
		 * Require that typeof tests use proper strings.
		 *
		 * @standard WDS
		 *
		 * e.g. undefined === typeof var will fail,
		 * while 'undefined' === typeof var will pass.
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'valid-typeof': 'warn',

		/**
		 * Enforce declarations not expressions.
		 *
		 * @standard WDS
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'func-style': ['error', 'declaration'],

		/**
		 * Require == and !== where necessary.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#equality
		 *
		 * @author Aubrey Portwood
		 * @since  1.1
		 */
		eqeqeq: 'error',

		/**
		 * Disallow null comparisons without type-checking operators.
		 *
		 * @standard WP
		 *
		 * @since  1.1
		 * @author Aubrey Portwood
		 */
		'no-eq-null': 'error',

		/**
		 * Must use radix in parseInt.
		 *
		 * @standard WDS
		 *
		 * e.g.
		 *
		 *     var a = 1.22;
		 *     var b = parseInt( a, 10 ); // Radix used here
		 *
		 * @author Aubrey Portwood
		 * @since  1.1
		 */
		radix: 'error',

		/**
		 * Force undefined variables to be in globals.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#globals
		 *
		 * E.g.
		 *
		 *     function a() {
		 *
		 *         // Below jQuery is undefined as it's included as a library.
		 *         return jQuery( '#id' );
		 *     }
		 *
		 * To fix:
		 *
		 *     // globals jQuery;
		 *
		 *     function a() {
		 *
		 *         // Below jQuery is undefined as it's included as a library.
		 *         return jQuery( '#id' );
		 *     }
		 *
		 * @author Aubrey Portwood
		 * @since 1.1
		 */
		'no-undef': 'error',
	},
};
