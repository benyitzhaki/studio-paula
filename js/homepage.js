	jQuery(document).ready(function ($) {
		"use strict";
		var header = jQuery('.main_header'),
		    html = jQuery('html'),
		    body = jQuery('body'),
		    footer = jQuery('footer'),
		    window_h = jQuery(window).height(),
		    window_w = jQuery(window).width(),
		    main_wrapper = jQuery('.main_wrapper'),
		    site_wrapper = jQuery('.site_wrapper'),
		    preloader_block = jQuery('.preloader'),
		    fullscreen_block = jQuery('.fullscreen_block'),
		    is_masonry = jQuery('.is_masonry'),
		    grid_portfolio_item = jQuery('.grid-portfolio-item'),
		    pp_block = jQuery('.pp_block'),
		    head_border = 1;

		//todo: replace with actual pre-rendered html to avoid client side rendering.
		/*for (var i = 1; i < 59; i++) {
		 var s = "000000000" + i;
		 s = s.substr(s.length - 4);
		 $(".ribbon_list").append('<li data-count="' + i + '" data-title=" : Num.' + i + '" class="slide' + i + '"><div class="slide_wrapper"><img src="img/gallery/1/' + s + '.jpg" alt="image' + s + '"/></div></li>');
		 }
		 */

		jQuery('#ribbon_swipe').on("swipeleft", function (e) {
			next_slide();
		});
		jQuery('#ribbon_swipe').on("swiperight", function (e) {
			prev_slide();
		});
		jQuery('.ltl_prev').click(function () {
			prev_slide();
		});
		jQuery('.ltl_next').click(function () {
			next_slide();
		});
		jQuery('.btn_prev_wrapper').click(function () {
			prev_slide();
		});
		jQuery('.btn_next_wrapper').click(function () {
			next_slide();
		});

		jQuery('.slide1').addClass('currentStep');
		jQuery('.slider_caption').text(jQuery('.currentStep').attr('data-title'));

		ribbon_setup();
	});
	jQuery(window).resize(function ($) {
		"use strict";
		ribbon_setup();
		setTimeout("ribbon_setup()", 500);
		setTimeout("ribbon_setup()", 1000);
	});
	jQuery(window).load(function ($) {
		"use strict";
		ribbon_setup();
		setTimeout("ribbon_setup()", 700);
	});

	function ribbon_setup() {
		"use strict";
		var setHeight = jQuery(window).height() - jQuery('.main_header').height() - 20;
		var setHeight2 = jQuery(window).height() - jQuery('.main_header').height() - jQuery('.slider_info').height() - 20;
		jQuery('.fs_grid_gallery').height(jQuery(window).height() - jQuery('.main_header').height() - 1);
		jQuery('.currentStep').removeClass('currentStep');
		jQuery('.slide1').addClass('currentStep');
		jQuery('.slider_caption').text(jQuery('.currentStep').attr('data-title'));
		jQuery('.num_current').text('1');

		jQuery('.num_all').text(jQuery('.ribbon_list li').size());
		jQuery('.ribbon_wrapper').height(setHeight2);
		jQuery('.ribbon_list .slide_wrapper').height(setHeight2);
		jQuery('.ribbon_list').height(setHeight2).width(20);/*.css('left', 0)*/
		jQuery('.fs_grid_gallery').width(jQuery(window).width());
		jQuery('.ribbon_list').find('li').each(function () {
			jQuery('.ribbon_list').width(jQuery('.ribbon_list').width() + jQuery(this).width());
			jQuery(this).attr('data-offset', jQuery(this).offset().left);
			jQuery(this).width(jQuery(this).find('img').width() + parseInt(jQuery(this).find('.slide_wrapper').css('margin-left')));
		});
		var max_step = -1 * (jQuery('.ribbon_list').width() - jQuery(window).width());
	}
	function prev_slide() {
		"use strict";
		var max_step = -1 * (jQuery('.ribbon_list').width() - jQuery(window).width());
		var current_slide = parseInt(jQuery('.currentStep').attr('data-count'));
		current_slide--;
		if (current_slide < 1) {
			current_slide = jQuery('.ribbon_list').find('li').size();
		}
		jQuery('.currentStep').removeClass('currentStep');
		jQuery('.num_current').text(current_slide);
		jQuery('.slide' + current_slide).addClass('currentStep');
		jQuery('.slider_caption').text(jQuery('.currentStep').attr('data-title'));
		if (-1 * jQuery('.slide' + current_slide).attr('data-offset') > max_step) {
			jQuery('.ribbon_list').animate({
				transform: 'translateX(' + (-1 * jQuery('.slide' + current_slide).attr('data-offset')) + 'px)'
			});
			//jQuery('.ribbon_list').css('left', -1 * jQuery('.slide' + current_slide).attr('data-offset'));
		} else {
			jQuery('.ribbon_list').animate({
				transform: 'translateX(' + max_step + 'px)'
			});
			//	jQuery('.ribbon_list').css('left', max_step);
		}
	}
	function next_slide() {
		"use strict";
		var max_step = -1 * (jQuery('.ribbon_list').width() - jQuery(window).width());
		var current_slide = parseInt(jQuery('.currentStep').attr('data-count'));
		current_slide++;
		if (current_slide > jQuery('.ribbon_list').find('li').size()) {
			current_slide = 1
		}
		jQuery('.currentStep').removeClass('currentStep');
		jQuery('.num_current').text(current_slide);
		jQuery('.slide' + current_slide).addClass('currentStep');
		jQuery('.slider_caption').text(jQuery('.currentStep').attr('data-title'));
		if (-1 * jQuery('.slide' + current_slide).attr('data-offset') > max_step) {
			//jQuery('.ribbon_list').css('left', -1 * jQuery('.slide' + current_slide).attr('data-offset'));
			jQuery('.ribbon_list').animate({
				transform: 'translateX(' + (-1 * jQuery('.slide' + current_slide).attr('data-offset')) + 'px)'
			});


		} else {
			jQuery('.ribbon_list').animate({
				transform: 'translateX(' + max_step + 'px)'
			});
			//jQuery('.ribbon_list').css('left', max_step);
		}
	}