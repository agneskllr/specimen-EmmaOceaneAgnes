$(document).ready(function(){
    $(".mySlider").slider({
      min: 8,
      max: 150,
      value: 16,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySlider" ).slider("value");
    $(".container").css('font-size',fontSize);

    $(".mySlider").on( "slide", function() {
      var fontSize = $( ".mySlider" ).slider("value");
      $(".container").css('font-size',fontSize);
    });
});
