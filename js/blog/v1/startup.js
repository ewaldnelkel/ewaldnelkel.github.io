$(document).ready(function() {

	// Fenster für Empfehlungs-Links
	$('#sharing a')
		.bind('click', function() {
			window.open($(this).attr('href'), $(this).attr('class'), 'height=400,width=600');
			return false;
		});

	// FancyBox für Blog-Bilder
	if (window.jQuery.fancybox) {
		$('article').each(function(i) {
			$('a:has(img)', $(this))
				.addClass('fancybox')
				.attr('rel', i);
		});
		$('.fancybox').fancybox({
			autoCenter: true,
			beforeShow: function() {
        		var alt = this.element.find('img').attr('alt');
				this.inner.find('img').attr('alt', alt);
				this.title = alt;
    		},
			padding: 0,
		});
	}

	// Share-HTML im Blog in Footer verschieben
	var postShareHTML = $('section #sharing');
	if (postShareHTML.length > 0) {
		$('footer #sharing').replaceWith(postShareHTML);
	}

	// Archiv-HTML im Blog in Navigation verschieben
	$('nav ul').append($('#BlogArchive1 ul').html());
	$('#sidebar').remove();

});
