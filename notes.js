var confirmation {
  init: function(){
    //handlers 
    //load confirmation $.ajax
    //showBoardingPass function
    //must use this
  }
};

//jquery stuff 


///


function Vacation(destination){
  //code
  this.details = function (){
    console.log(destination); //in browser tools
  }
}
$(document).ready(function() {
  var paris = New Vacation('Paris');
  paris.details();

  var london = New Vacation("London");
})

function Confirmation(el) { 
  this.el = el; //element
  //helper 
  //eventhandlers 
  var confirmation = this; 
}

dataType: 'json'
contentType: 'application/json'
replace result by converting json to html 


$('form').on('submit'), function(event) {
  event.preventDefault();
  var form = $(this);
  $.ajax($('form').attr('action'), {

    type: 'POST', 
    contentType: 'application/json',
    dataType: 'json', 
    data: form.serialize(), 
    success: function(result){
      form.remove();
      var msg = $("<p></p>");
      msg.append("Destination: " + result.location + ". ");
      msg.append("Price: " + result.totalPrice + ". ");
      msg.append("Nights: " + result.nights + ". ");
      msg.append("Confirmation: " + result.confirmation + ". ");
      $('#vaction').hide().html(msg).fadeIn();

    }
  })
}
