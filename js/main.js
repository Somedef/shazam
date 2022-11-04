AOS.init();

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
});
$('.go-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});
// 탑버튼

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});
// 헤더




















