$('button').on('click', function() {
  $.getJSON('cities/deals', function(data){
    $.each(data, function(index, dealItem) {
        var dealElement = $('.deal-' + index);
        dealElement.find('.name').html(dealItem.name);
        dealElement.find('.price').html(dealItem.price);
      });
   })
 });