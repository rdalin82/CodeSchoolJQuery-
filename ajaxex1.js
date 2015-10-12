$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.get('/photos.html', function(response){
    $('.photos').html(response).fadeIn();
    });
  });
});

/* 
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});
*/
