
//application.js
$(document).ready(function() {
  $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();
    $.when(Vacation.getPrice(location), Photo.getPhoto(location)).then(function(priceResult, photoResult){
    	$('<p>$'+priceResult+'</p>').appendTo(resultDiv);
      $('<img />').attr('src', photoResult).appendTo(resultDiv);
    })
  });
});


//vacation.js
var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/prices', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      }
    });
    return promise;
  }
}

//photo.js
var Photo = {
  getPhoto: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/photos', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.url);
      }
    });
    return promise;
  }
}

/*
<ul>

<li data-location="london, uk">
  London, UK
  <button>More Info</button>
  <div class="results"></div>
</li>

<li data-location="paris, france">
  Paris, France
  <button>More Info</button>
  <div class="results"></div>
</li>

<li data-location="new york, ny">
  New York, NY
  <button>More Info</button>
  <div class="results"></div>
</li>

</ul>
*/