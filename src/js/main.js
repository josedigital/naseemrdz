$(function() {

  var $body = $('body'),
      $menu = $('.menu');

  $menu.on('click', function() {
    ($menu, $body).toggleClass('is-active');  
  });
  

});