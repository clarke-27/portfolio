$(document).ready(function () {
  $('#overlay').hide();
  $('.openNav').click(function () {
    $('#overlay').slideDown(600, 'swing');
  });

  $('#exit').click(function () {
    $('#overlay').slideUp(600, 'swing');
  });
});
