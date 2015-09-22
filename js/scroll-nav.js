$('footer a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 300);

    return false;

})

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('footer').addClass('fixed');
        $('.wrapper div').each(function(i) {
            
        });
        
    } else {
        $('footer').removeClass('fixed');
    }

}).scroll();