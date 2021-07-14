document.addEventListener("DOMContentLoaded", function () {
	// Custom JS

	// Navigation active state on scroll

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	// Initiate the wowjs animation library
	new WOW().init();

	// Header scroll class
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 140) {
	// 		$('#header').addClass('header-scrolled');
	// 		// $('#header-logo').fadeIn();
	// 	} else {
	// 		$('#header').removeClass('header-scrolled');
	// 		// $('#header-logo').fadeOut();
	// 	}
	// });

	// if ($(window).scrollTop() > 100) {
	// 	$('#header').addClass('header-scrolled');
	// }

	// Smooth scroll for the navigation and links with .scrollto classes
	$('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						top_space = top_space + 50;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.main-nav, .mobile-nav').length) {
					$('.main-nav .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	var nav_sections = $('section');
	var main_nav = $('.main-nav, .mobile-nav');
	var main_nav_height = $('#header').outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		nav_sections.each(function () {
			var top = $(this).offset().top - main_nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				main_nav.find('li').removeClass('active');
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
		});
	});
	// Navigation active state on scroll


	// Relax
	var rellax = new Rellax('.rellax');
	// Relax
	// Sign On
	const signBlock = document.querySelectorAll('.dashboard_signon__block');
	const signTop = document.querySelectorAll('.dashboard_signon__block-top');
	const signContent = document.querySelectorAll('.dashboard_signon__block-content');
	const imgs = document.querySelectorAll('.dashboard_img');

	function rotateArrow(e) {
		e.preventDefault();
		signBlock.forEach(t => t.classList.remove('arrow_active'));
		signContent.forEach(t => t.classList.remove('content_active'));
		imgs.forEach(t => t.classList.remove('dashboard_img-active'));
		this.classList.add('arrow_active');
		let classes = [...this.classList];
		if (classes.includes('dashboard_signon__block-1')) {
			imgs[0].classList.add('dashboard_img-active');
		} else if (classes.includes('dashboard_signon__block-2')) {
			imgs[1].classList.add('dashboard_img-active');
		} else if (classes.includes('dashboard_signon__block-3')) {
			imgs[2].classList.add('dashboard_img-active');
		} else if (classes.includes('dashboard_signon__block-4')) {
			imgs[3].classList.add('dashboard_img-active');
		}
		let content = this.children[1];
		content.classList.add('content_active');
	}

	signBlock.forEach(top => top.addEventListener('click', rotateArrow));

	// Sign On

	new WOW().init();

	$('.belcanto_slider').owlCarousel({
		loop: true,
		// margin: 10,
		// nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})
	$('.particular_slider').owlCarousel({
		loop: true,
		// margin: 10,
		// nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})
	$('.hotelspalace_slider').owlCarousel({
		loop: true,
		// margin: 10,
		// nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})
	$('.broteria_slider').owlCarousel({
		loop: true,
		// margin: 10,
		// nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})


	$('.modal-close').on('click', function() {
		$('.modal-wrapper').addClass('remove-modal');
		setTimeout(() => {
			$('.modal-wrapper').hide();
			$('#index-body').css({
				overflow: 'auto'
			})
		}, 500)
	})
	const overlay = $('.modal-overlay')[0];
	$(window).on('click', function(e) {
		if(e.target == overlay) {
			$('.modal-wrapper').addClass('remove-modal');
			setTimeout(() => {
				$('.modal-wrapper').hide();
				$('#index-body').css({
					overflow: 'auto'
			})
		}, 500)
		}
	});




	const createBtn = document.querySelector('.product-nav_create');
	const spanStart = document.querySelector('.span_start');
	const spanEnd = document.querySelector('.span_end');

	$('.product-nav_create').hover(function() {
		if($('.span_start').css(
			{ display : 'none' }
		)) {
			$('.span_start').show();
			$('.span_end').hide();
		}
		if($('.span_end').css(
			{ display : 'none' }
		)) {
			$('.span_start').hide();
			$('.span_end').show();
		}
	});

});

