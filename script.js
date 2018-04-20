var $win = $(window);

$win.on('scroll', function () {
  // This event will be fired every time the browser scrolls
  var topPixels = $win.scrollTop();
  console.log(topPixels);
  if(topPixels > 1){
    $('.nav').css('background-color', 'rgba(40, 46, 52, ' + topPixels/700 + ')');
  }
});