// 아코디언
$(function(){
    $('.accordion li').mouseover(function(){
        $('.content').addClass('on')
    })
    $('.accordion li').mouseleave(function(){
        $('.content').removeClass('on')
    })
})

// go-top 버튼
$(function(){
    $('.go-top').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() >=400) {
            $('.go-top').fadeIn();
        }else {
            $('.go-top').fadeOut();
        }
    })

    $('.go-top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop : 0
        });
    })
})

// floating-btn 토글
$(function(){
    $('.press').click(function(){
        $('.floating-btn-wrap .expand-btn').toggleClass('active')
    })
})
