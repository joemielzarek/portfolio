
$( document ).ready(function() {
    console.log( "ready!" );

    $('#fullpage').fullpage({
      anchors: ['Warning', 'Myth', 'True Form', 'Experience', 'Connect'],
      menu: '#myMenu',
      navigation: true,
      navigationTooltips: ['Warning', 'Myth', 'True Form', 'Experience', 'Connect'],
      responsiveWidth: 1100
    });


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true
    });

    $('.beast').on({
  'mouseover' : function() {
    $(this).attr('src','https://s31.postimg.org/b8xrjq4kr/normaljoe.png');
    $('.myname').show();
    $('.mdb').hide();

  },
  mouseout : function() {
$(this).attr('src','https://s32.postimg.org/olagb7ns5/beastjoe2.png');
  $('.myname').hide();
  $('.mdb').show();

  }
});







// Circle Reveal

	"use strict";

    $(document).on( "mousemove", function( event ) {
        $(".circle" ).animate({
            top: event.pageY-($(".circle").height()/2),
            left: event.pageX-($(".circle").width()/2)
        }, 0, "linear");
    });


});
