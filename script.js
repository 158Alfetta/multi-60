var $win = $(window);

$( document ).ready(function() {
     $('.modal').fadeIn(600, "linear");
});

$win.on('scroll', function () {
// This event will be fired every time the browser scrolls
var topPixels = $win.scrollTop();
console.log(topPixels);
if(topPixels/700 > 0.33){
  $('.nav').css('background-color', 'rgba(40, 46, 52, ' + topPixels/700 + ')');
  $('.cur').css('background-color', 'rgba(100, 100, 100, ' + topPixels/700 + ')');
}
else{
  $('.cur').css('background-color', 'rgba(30, 30, 30, 0.33)');
}
});

function closeModal() {
  $('.modal').fadeOut(200, "linear");
  // $('.modal').css('display', 'none');
}
