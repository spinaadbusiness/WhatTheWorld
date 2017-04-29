//sidebar toggle
$("#menu-toggle").click( function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
});
//carousel settings
$('.carousel').carousel({
    interval: 3000,
    pause: "hover",
    keyboard: "true"
});
//key functionality for carousel
$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('#myCarousel').carousel('next');
    }
    else if(e.which == 37){
        $('#myCarousel').carousel('prev');
    }
    else if(e.which == 38){
        //TODO:: Up arrow to save city
    }
    else if(e.which == 40){
        //TODO:: Down arrow to dislike city
    }
});
//TODO:: add swipe functionality

//Focus carousel on load
window.onload = function() {
    var position = $(window).scrollTop();
    $('myCarousel').focus()
    $(window).scrollTop(position);
};
$(document).ready(function(){
    var link = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" 
    + cityData.cityName + "&callback=?";
    $.ajax({
        type: "GET",
        url: link,
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#article').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});
if ($(window).width() <= 960) {
   $('.carousel-inner').find('.item').height('40vh');
}
$(window).on('resize', function(){
    if ($(window).width() <= 960) {
       $('.carousel-inner').find('.item').height('40vh');
    }
    else {
       $('.carousel-inner').find('.item').height('60vh');
    }
});









