$(document).ready(function() {

	// Auf-/Zuklappfunktion für Detailinformationen einrichten
	$('#portfolio_js h3 a')
		.bind('click', function() {
			$(this).parent().next().slideToggle();
		});

	// Scroll-Effekt auf Seite
	$('.arrow_js')
		.bind('click', function() {
			$.scrollTo($(this).attr('href'), 1500);
			return false;
		});

	// Mailadressen leserlich machen
	$('.email_js').each(function() {
		$(this).html($(this).text().replace(' (ät) ', '@').replace(' (punkt) ', '.'));
	});

	// Fenster für Empfehlungs-Links
	$('#sharing a')
		.bind('click', function() {
			window.open($(this).attr('href'), $(this).attr('class'), 'height=400,width=600');
			return false;
		});

	// Parallaxe vorbereiten
	$('.parallax_js').each(function() {
		$(this).css('background-image', $(this).css('background-image') + ', url(' + $(this).attr('data-image-url') + ')');
	});

	// High-End-Parallax-Effekt
	$(window)
		.bind('scroll', function() {
			var w_height = $(window).height();
			var w_position = $(window).scrollTop();
			$('.parallax_js:visible').each(function() {
				var p_offset = $(this).offset().top;
				if (w_position + w_height > p_offset && w_position < p_offset + 500) {
					var p_diff = $(this).width() * $(this).attr('data-image-ratio') - 500;
					var i_offset = Math.floor(p_diff * (w_position / (p_offset + 500))) * -1;
					$(this).css('background-position', 'left top, right bottom, 0 ' + i_offset + 'px');
				}
			});
		})

		// Kartenbreite an Fenstergröße anpassen
		.bind('resize', function() {
			$('footer iframe:visible').attr('width', $('header div').width());
		})

		// Parallaxe richtig setzen
		.trigger('scroll')

		// Kartenbreite anpassen
		.trigger('resize');

	// kleiner Trick, dass die Navigation auf der Startseite besser aussieht...
	$('nav ul')
		.hover(function() {
			$('#contact_js').css('visibility', 'hidden');
		}, function () {
			$('#contact_js').css('visibility', 'visible');
		});

});
