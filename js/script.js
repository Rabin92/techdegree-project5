// Plugin settings
baguetteBox.run('.flex-container', {
  animation: 'fadeIn',
  fullScreen: true,
  buttons: true,
});

// Search Function
$(document).ready(function () {
  // Setting title attribute of <a> tag
  $('.photo').attr('title', 'Click here to enlarge');

  $('#search').on('keyup', function () {
    let photo = $('.photo');
    // Save user input & display it on a console
    let search = $(this).val().toLowerCase();
    // (for loop) to loop through all <a> tags
    for (let i = 0; i < photo.length; i++) {
      const caption = $('.photo')[i].getAttribute('data-caption').toLowerCase();
      // Conditional statement
      if (caption.includes(search)) {
        $('.photo')[i].style.display = 'block';
      } else {
        $('.photo')[i].style.display = 'none';
      }
    }
  });
});

// Date Object

const date = new Date();
const fullYear = date.getFullYear();

const setYear = document.querySelector('.setYear');
setYear.innerHTML = fullYear;
