$(function(){
    //  TypeIt - Welcome
    $("#typing").typeIt({
        strings: ['Business strategy', 'Organization Management', 
        'Business Innovation'],
        speed: 150,
        autoStart: true,
        breakLines: false,
    })

    // Slick Slider - Review & Guide
    $('.review-slider, .mockup-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        mobile: false
      });

    // Faq Accordion
    $('.faq-desc').eq(0).show();
    $('.faq-title').click(function() {
        $(this).siblings().stop().slideDown();
        $(this).parent().siblings().children('.faq-desc').stop().slideUp();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    })

    // Video Modal
    $('.play-modal').click(function() {
        $('.video-modal').fadeIn();
        $('body').addClass('active');
    })

    $('.close-modal').click(function() {
        $('.video-modal').fadeOut();
        $('body').removeClass('active');
    })

    $('.btn-top').click(function() {
        $('html').animate({
            scrollTop : 0
        },100)
    })

    // Wow Scroll Animation
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: false
    })
    wow.init()

    // Trigger Menu
    $('#trigger').click(function() {
        $('.gnb').toggleClass('active');
        $(this).toggleClass('active');
    })

    $('.gnb a, section').click(function() {
        $('.gnb, #trigger').removeClass('active');
    })

    // PC 환경
    let filter = 'win16|win32|win64|mac|macintel';
    if(navigator.platform) {
        // PC 접속 시에만 top버튼 생성
        if(filter.indexOf(navigator.platform.toLowerCase()) > 0) {
            $(window).scroll(function() {
                if($(this).scrollTop() > 200) {
                    $('.btn-top').fadeIn();
                    $('header').addClass('active');
                } else {
                    $('.btn-top').fadeOut();
                    $('header').removeClass('active');
                }
            })
        }
    }
})