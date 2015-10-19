//application.js
$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    });
  });
});


// vacation.js
var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/prices', {
     data: {q: location}, 
     success: function(result){
      promise.resolve(result.price)
     }
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