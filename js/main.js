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
    if ($(window).scrollTop() > 0) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});
// 헤더

$(".pop").click(function(){
    $(".modal").fadeIn(250);
    $('.modalbox').fadeIn(250);
})

$(".modal").click(function(){
    $(".modal").fadeOut(200);
})

$(window).scroll(function(){
    $(".modal").fadeOut(400);
})
// 스크롤하이드
// 앱다운로드 팝업

$("#xmark").click(function(){
    $(".label").fadeOut(200);
})
// 쿠키

$(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
});
// 탑이동방지

$(window).on('load', function() {
    setTimeout(function(){
        $("#waiting").fadeOut();
    }, 500);
});
// 로딩















