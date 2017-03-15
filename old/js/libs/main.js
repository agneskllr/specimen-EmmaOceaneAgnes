
$( document ).ready()
    $('.next_nav').click(function() {
          $(".nav").animate({
            scrollLeft: '+=156px'
          });
        });
        $('.prev_nav').click(function() {
          $(".nav").animate({
            scrollLeft: '-=156px'
          });
        });
});