(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  new Swiper('.welcome__slider .swiper', {
    speed: 1000,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.welcome__slider .swiper-button-next',
      prevEl: '.welcome__slider .swiper-button-prev',
    },
  });

  

  $('body').on('click', function(){
    $('.header__menu').removeClass('active');
    // $('.wrap-content, .footer').removeClass('blur');
    $('.header__burger').removeClass('active');
    $('body').removeClass('overflow');
    $('.nav__item').removeClass('active')
  });

  $('.header__burger').on('click', function(){
    $('.header__menu').toggleClass('active');
    // $('.wrap-content, .footer').toggleClass('blur');
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('overflow');
  });
  
  $('.header__burger, .header__menu').on('click', function(event){
    event.stopPropagation();
  });

  
  
  $(window).on('resize load', function(){
    if ($(window).width() <= 1200) {
      $('.header').addClass('mobile')
    } else {
      $('.header').removeClass('mobile')
      $('.nav__item').removeClass('active').children('ul').hide();
    }
  });

  $('.nav__item').on('click', function(){
    if ($('.header').hasClass('mobile')) {
      $(this).toggleClass('active').children('ul').slideToggle(300);
    }
    
  });



  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 10) {
      $('.header--wrap').addClass('active')
    } else {
      $('.header--wrap').removeClass('active')
    }
  })


})(jQuery);

