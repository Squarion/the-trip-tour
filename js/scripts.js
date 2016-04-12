var swiper = new Swiper('.swiper-container', {
    //pagination: '.swiper-pagination',
    //paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    keyboardControl: true,
    spaceBetween: 0,
    hashnav: true,
    speed: 500,
    onSlideChangeEnd: function(swiper) {
        //$('.content').hide();
        $('.swiper-slide-active .content').fadeIn(1000);

        //$('.overlay').hide();
        $('.swiper-slide-active .overlay').fadeIn(1000);

        $(".sound").trigger('pause');
        $(".swiper-slide-active .sound").trigger('play');
    }
});

$(function() {
    $('.content').hide();
    $('.overlay').hide();
    $(window).on("load", function() {
        $('.loader').fadeOut(500, function() {
            $('.swiper-container').css('visibility', 'visible');
            $('.swiper-container').css('opacity', '1');
            $('.swiper-slide-active .overlay').show();
            $('.swiper-slide-active .content').show();
        });
    });
});
