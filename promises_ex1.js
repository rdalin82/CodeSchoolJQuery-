//application.js
$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    var promise = Vacation.getPrice(location);
    $.ajax('/vacation/prices', {
      data: {q: location},
      success: promise.done(function(result){
        $('.price').text(result.price);
      })
    });
  });
});


// vacation.js
var Vacation = {
  getPrice: function(location){
   var promise = $.ajax('/vacation/prices', {
     data: {q: location}
   });

   return promise;
  }
}

/*html: 

<div class="vacation-location">
  <h3 class="location">London, UK</h3>
  <p class="price"></p>
  <button>Update Price</button>
</div>

*/