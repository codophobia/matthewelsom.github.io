// me scripts 

   
// Slide Menu		
function slideMenu() {
  $('.menu-trigger, .menu-screen').click(function() {
		$('.menu, .menu-screen, .menu-trigger, .sliding-menu-content').toggleClass('is-visible');
 });
}
// End Slide Menu
		

// Modal
	function modal() {
	  $(".modal-state").on("change", function() {
		if ($(this).is(":checked")) {
		  $("body").addClass("modal-open");
		} else {
		  $("body").removeClass("modal-open");
		}
	  });
	
	  $(".modal-fade-screen, .modal-close, .modal-close-btn").on("click", function() {
		$(".modal-state:checked").prop("checked", false).change();
	  });
	
	  $(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	  });
	}
// End Modal	
	

//JS for Smoothscroll
function smoothscroll() {
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 500);
		return false;
		}
	}
	});
}
// End Smoothscroll


// Change Menu on Scroll
function menuScroll() {
	
	var t = $("main").offset().top;
		
		$(window).scroll(function(){
			if($(this).scrollTop() > t + 10) {   
				$('.menu').addClass("showbg");
		 } else {
				$(".menu").removeClass("showbg");	
			}
		});
}
// End Change Menu on Scroll




//// Fade in Project Images
//	(function($) {
//	
//		/**
//		 * Copyright 2012, Digital Fusion
//		 * Licensed under the MIT license.
//		 * http://teamdf.com/jquery-plugins/license/
//		 *
//		 * @author Sam Sehnert
//		 * @desc A small plugin that checks whether elements are within
//		 *     the user visible viewport of a web browser.
//		 *     only accounts for vertical position, not horizontal.
//		 */
//	
//		$.fn.visible = function(partial) {
//			
//				var $t            = $(this),
//						$w            = $(window),
//						viewTop       = $w.scrollTop(),
//						viewBottom    = viewTop + $w.height(),
//						_top          = $t.offset().top,
//						_bottom       = _top + $t.height(),
//						compareTop    = partial === true ? _bottom : _top,
//						compareBottom = partial === true ? _top : _bottom;
//			
//			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//	
//		};
//			
//	})(jQuery);
//	
//	var win = $(window);
//	
//	var allMods = $(".project article figure");
//	
//	allMods.each(function(i, el) {
//		var el = $(el);
//		if (el.visible(true)) {
//			el.addClass("seen"); 
//		} 
//	});
//	
//	win.scroll(function(event) {
//		
//		allMods.each(function(i, el) {
//			var el = $(el);
//			if (el.visible(true)) {
//				el.addClass("show"); 
//			} 
//		});
//		
//	});
//	
	

//Functions that run when all HTML is loaded
$(document).ready(function() {
	slideMenu();
	menuScroll();
	modal();
	smoothscroll(); 
});

