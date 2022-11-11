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
    $(".layer").fadeIn(250);
})

$(".pop").click(function(){
    $(".layer-bg").fadeIn(250);
})
// 앱다운로드 클릭시 fadeIn

$(".layer-bg").click(function(){
    $(".layer").fadeOut(200);
})

$(".layer-bg").click(function(){
    $(".layer-bg").fadeOut(200);
})
// 배경 클릭시 fadeOut

$(".layer").click(function(){
    $(".layer").fadeOut(200);
})

$(".layer").click(function(){
    $(".layer-bg").fadeOut(200);
})
// 팝업 클릭시 fadeOut
// 클릭



$(window).scroll(function(){
    $(".layer").hide(400);
})

$(window).scroll(function(){
    $(".layer-bg").hide();
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















