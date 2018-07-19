<?php
/**
 * The footer for our theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Uuups
 */

?>
	<footer class="app-footer mx-auto max-width-1 px-2 py-4">
		<?php Hybrid\View\render( 'menu', 'social', [ 'name' => 'social' ] ); ?>

		<p class="app-footer__credit text-center color-grey-60 mb-0">
			<?php esc_html_e( 'Powered by crazy ideas and passion', 'uuups' ); ?>
			<span class="sep"> &middot; </span>
			<?php
				/* translators: %1$s is theme name, and %2$s is link to theme site. */
				printf( esc_html__( 'Theme %1$s by %2$s', 'uuups' ), 'Uuups', '<a href="https://foxland.fi/">Foxland</a>' );
			?>
		</p>
	</footer>

</div><!-- .app -->

<?php wp_footer(); ?>
</body>
</html>
