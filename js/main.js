$(window).on('resize ready', function() {

  // Store the width of the images
  var imagewidth = $('.galimg').width();

  // Apply the width as the height to all elements (makes it a square!)
  $('.galimg').height(imagewidth);

});

/*var person1 = { 'name':'George Brown', 'age':200, 'weight':80 };
var person2 = { 'name':'Some Person', 'age':50, 'weight':85 };

// An array of Objects
var classroom = [person1, person2]; */



/*// An array of images (strings!)
var images = [
              {'src':'img/1.jpg', 'caption':'Hotel in Beijing, China at night'},
              {'src':'img/2.jpg', 'caption':'Hong Kong from a tower at night'},
              {'src':'img/3.jpg', 'caption':'A bar in Kyoto, Japan'},
              {'src':'img/4.jpg', 'caption':'Metz at Lee\'s Palace in Toronto'},
              {'src':'img/5.jpg', 'caption':'Toronto soccer at BMO Field'}
            ];*/

$.getJSON('json/data.json', function(images) {

  console.log(images); // dump out the data to the console

  // For each [ARRAY] > {OBJECT}, add a new image to the screen
  $.each(images, function(index, value) {

    $('.gallery').append('<figure class="galimg"><img src="' + value.src + '" data-caption="' + value.caption + '"></figure>');

  });

});




// There are 16 <img>, so for each one...
$('.galimg > img').each(function() {

  var w = $(this).width();  // current image width
  var h = $(this).height(); // current image height

  if (w > h) {
    $(this).addClass('landscape');
  }
  else {
    $(this).addClass('portrait');
  }

});
