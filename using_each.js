$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      // your code goes here
      $.each(result, function(index, item){
        console.log(item);
      })
    }
  });
});

//or 

$('button').on('click', function() {
  $.ajax('/cities/deals', {
    type: 'get',
    success: function(result) {
      $.each(result, function(index, dealItem) {
        var dealElement = $('.deal-' + index);
        dealElement.find('.name').html(dealItem.name);
        dealElement.find('.price').html(dealItem.price);
      });
    }
  });
});