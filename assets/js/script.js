$(document).ready(function() {

  $('.header__menu-btn').on('click', function() {
    $('body').toggleClass('is-menu-open');
    $('.header__menu').toggleClass('is-active');
    $(this).toggleClass('is-active');
  });

  $('.header__overlay').on('click', function() {
    $('body').removeClass('is-menu-open');
    $('.header__menu').removeClass('is-active');
    $('.header__menu-btn').removeClass('is-active');
  });

  $('.header__link, .footer__link').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top - 80;

    $('html').animate({
      scrollTop: targetOffset
    });
    $('body').removeClass('is-menu-open');
    $('.header__menu').removeClass('is-active');
    $('.header__menu-btn').removeClass('is-active');
  });

  $('.add-service__tab').on('click', function() {
    if ($(this).hasClass('is-active')) {
      return;
    }

    var $this = $(this);
    var index = $this.data('tab');
    var $tabs = $this.siblings();
    var $items = $('.add-service__item');
    var $target = $('.add-service__item[data-item="' + index + '"]');
    var $wrapper = $('.add-service__items-wrapper');

    $tabs.removeClass('is-active');
    $this.addClass('is-active');
    $items.removeClass('is-active');

    setTimeout(function() {
      $target.addClass('is-active');
      $wrapper.css('transform', 'translateX(-' + (index * 100) + '%)');
    }, 150);    
  });

  $('.form').on('submit', function(e) {
    var isError = false;
    var $inputs = $(this).find('input');

    $inputs.each(function() {
      var $this = $(this);

      if ($this.val().trim() === '') {
        $this.addClass('is-error');
        isError = true;
      }
    });

    if (isError) {
      e.preventDefault();
    }
  });

  $('.form input').on('input', function() {
    $(this).removeClass('is-error');
  });

  $(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > 0) {
      $('.header').addClass('is-fixed');
    } else {
      $('.header').removeClass('is-fixed');
    }
  });

  $(window).on('resize', function() {
    var wWidth = $(this).width();

    if (wWidth >= 960) {
      $('body').removeClass('is-menu-open');
      $('.header__menu').removeClass('is-active');
      $('.header__menu-btn').removeClass('is-active');
    }
  });

});
