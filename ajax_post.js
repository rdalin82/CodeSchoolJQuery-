/*
$(document).ready(function() {
  $('form').on('submit', function(event){
    event.preventDefault();
  });

});

*/

/*
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: "POST", 
      data: $('form').serialize()
    })
    
  });
});
*/

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(), 
      success: function(result){
        $('.tour').html(result);
      }
    });
  });
});