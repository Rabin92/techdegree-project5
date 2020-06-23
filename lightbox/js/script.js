// Lightbox plugin options
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
});

// Search Function
$(document).ready(function () {
  // Setting title attribute of <a> tag
  $(".photo").attr("title", "Click here to enlarge");

  $("#search").on("keyup", function () {
    let photo = $(".photo");
    // Save user input & display it on a console
    let search = $(this).val().toLowerCase();
    console.log(search);
    // (for loop) to loop through all <a> tags
    for (let i = 0; i < photo.length; i++) {
      const caption = $(".photo")[i].getAttribute("data-title").toLowerCase();
      // Conditional statement
      if (caption.includes(search)) {
        $(".row")[i].style.display = "";
      } else {
        $(".row")[i].style.display = "none";
      }
    }
  });
});
