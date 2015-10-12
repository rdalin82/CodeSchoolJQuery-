$.fn.photofy = function() {
  this.each(function() {
    var tour = $(this);
    var show = function(e){
    	e.preventDefault();
      tour.addClass('is-showing-photofy');
  }
    tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy();

});
