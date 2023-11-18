/*
	Road Trip by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/*
//const API_KEY = "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"
const API_KEY = "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"
//const submitIcon = document.querySelector("myButton")
const inputElement = document.querySelector('.images-section')

var button = document.getElementById("myButton")

const getImages = async () => {
	const options = {
		method: "POST",
		headers: {
			"Authorization": 'Bearer ${API_KEY}',
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			"prompt": "Cats",
			"n": 1,
			"size": "1024x1024"
		})
	}
	try {
		const response = await fetch('https://api.openai.com/v1/images/generations', options)
		const data = await response.json()
		//console.log(data)

		data?.data.forEach(imageObject => {
			const ImageContainer = document.createElement('div')
			ImageContainer.classList.add('image-container')
			const imageElement = document.createElement('img')
			imageElement.setAttribute('src', imageObject.url)
			ImageContainer.append(imageELement)
			imageSection.append(ImageContainer)
		})
	} catch (error) {
		console.error(error)
	}
}

button.addEventListener('click', getImages)



(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		var $height = $('#header').height();

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner

			if ($banner.length > 0) {

				// IE: Height fix.
					if (skel.vars.browser == 'ie'
					&&	skel.vars.IEVersion > 9) {

						skel.on('-small !small', function() {
							$banner.css('height', '100vh');
						});

						skel.on('+small', function() {
							$banner.css('height', '');
						});

					}

				// More button.
					$banner.find('.more')
						.addClass('scrolly');

			}


		// Get BG Image

			if ( $( ".bg-img" ).length ) {

				$( ".bg-img" ).each(function() {

					var post 	= $(this),
						bg 		= post.data('bg');

					post.css( 'background-image', 'url(images/' + bg + ')' );

				});


			}

		// Posts

			$( ".post" ).each( function() {
				var p = $(this),
					i = p.find('.inner'),
					m = p.find('.more');

				m.addClass('scrolly');

				p.scrollex({
					top: '40vh',
					bottom: '40vh',
					terminate: 	function() { m.removeClass('current'); i.removeClass('current'); },
					enter: 		function() { m.addClass('current'); i.addClass('current'); },
					leave: 		function() { m.removeClass('current'); i.removeClass('current'); }
				});

			});

		// Scrolly.
			if ( $( ".scrolly" ).length ) {

				$('.scrolly').scrolly();
			}

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);*/

import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, React!</div>;
  }
}