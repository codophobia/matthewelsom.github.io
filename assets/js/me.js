// Slide Menu		
function slideMenu() {
  var menuToggle = $('.menu-trigger').unbind();
  $('.menu-content').removeClass("is-visible");
  $('.menu').removeClass('is-visible');
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('is-visible');
    $('.menu-content').slideToggle("fast", function(){
      if($('.menu-content').is(':hidden')) {
        $('.menu-content').removeAttr('style');
        $('.menu').removeClass('is-visible');
      }
    });
  });
}

//Mobile Menu
function MobileMenu() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
}

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

// Change Menu on Scroll
function menuScroll() {
  var t = $("body").offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop() > t + 10) {   
      $('.menu').addClass("showbg");
    } else {
    $(".menu").removeClass("showbg");	
    }
  });
}

//Sicky Sidebar
function StickySidebar() {
  var window_top = $(window).scrollTop();
  var article_top = $('article').offset().top;
  if (window_top > article_top) {
    $('.sticky').addClass('stuck');
  } else {
    $('.sticky').removeClass('stuck');
  }
}
$(function () {
  $(window).scroll(StickySidebar);
  StickySidebar();
});


//Target External Links
function TargetBlank() {
  $("a[href^='http']").attr("target","_blank").addClass("ext");
}

//Print Copyright Message
console.log('%c Copyright 2015 & Beyond. Matthew Elsom', "background: dodgerblue; color: white; padding:2px 4px; 2px 0");


//Functions that run when all HTML is loaded
$(document).ready(function() {
	slideMenu();
	menuScroll();
	modal();
	smoothscroll(); 
    TargetBlank(); 
});

