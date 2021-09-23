// 1. Simple mode, it styles document scrollbar:
$(function () {
    $("body").niceScroll({
        cursorcolor:"#06dce2",
        cursorwidth:"16px",
    });
    // scroll to features
    $('#partOne .fa-chevron-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.client').offset().top
        }, 1000)
    });
    //check testi
    var leftArrow = $('.testi .fa-chevron-left'),

        rightArrow = $('.testi .fa-chevron-right');

    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();
        }

    }
    checkClients();
    $('.testi i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testi .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {

            $('.testi .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";  //this feature from w3
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";   //this feature from w3
    document.body.style.backgroundColor = "white";
  }
// Get the modal  //this feature from w3
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

