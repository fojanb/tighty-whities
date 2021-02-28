// ***< jQuery start >***

$(function () {
  //scroll down effect :

  // nav bar:
  $("#item1").mouseenter(function () {
    $("#subItem1").slideDown().css({
      "text-align": "center",
      "font-size": "10px",
    });
  });
  $("#item1").mouseleave(function () {
    $("#subItem1").slideUp();
  });

  $("#item2").mouseenter(function () {
    $("#subItem2").slideDown().css({
      "text-align": "center",
      "font-size": "10px",
    });
  });
  $("#item2").mouseleave(function () {
    $("#subItem2").slideUp();
  });

  $("#item3").mouseenter(function () {
    $("#subItem3").slideDown().css({
      "text-align": "center",
      "font-size": "10px", 
    });
  });
  $("#item3").mouseleave(function () {
    $("#subItem3").slideUp();
  });

  $("#item4").mouseenter(function () {
    $("#subItem4").slideDown().css({
      "text-align": "center",
      "font-size": "10px",
    });
  });
  $("#item4").mouseleave(function () {
    $("#subItem4").slideUp();
  });

  $("#item5").mouseenter(function () {
    $("#subItem5").slideDown().css({
      "text-align": "center",
      "font-size": "10px",
    });
  });
  $("#item5").mouseleave(function () {
    $("#subItem5").slideUp();
  });

  $("#item6").mouseenter(function () {
    $("#subItem6").slideDown().css({
      "text-align": "center",
      "font-size": "10px",
    });
  });
  $("#item6").mouseleave(function () {
    $("#subItem6").slideUp();
  });

  // sticky nav-bar:
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Mobile-side-nav :
  $(".wrapper").hide();
  $("#mobile-nav").click(function () {
    $(".wrapper").toggle(1000);
  });
});
// ***< jQuery end >
