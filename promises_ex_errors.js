//application.js
$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    }).fail(function(result){
      console.log(result)
    });
  });
});


// vacation.js
var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax({
      url: '/vacation/prices',
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      },
      error: function(){
        var error = "invalid location"; 
        promise.reject(error);
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