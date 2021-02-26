// jQuery start :
// nav bar:
$(function () {
  $("#item1").mouseover(function () {
    $("#subItem1")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem1").mouseleave(function () {
      $("#subItem1").slideUp();
    });
  });
  $("#item2").click(function () {
    $("#subItem2")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem2").mouseleave(function () {
      $("#subItem2").slideUp();
    });
  });
  $("#item3").click(function () {
    $("#subItem3")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem3").mouseleave(function () {
      $("#subItem3").slideUp();
    });
  });
  $("#item4").click(function () {
    $("#subItem4")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem4").mouseleave(function () {
      $("#subItem4").slideUp();
    });
  });
  $("#item5").click(function () {
    $("#subItem5")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem5").mouseleave(function () {
      $("#subItem5").slideUp();
    });
  });
  $("#item6").click(function () {
    $("#subItem6")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem6").mouseleave(function () {
      $("#subItem6").slideUp();
    });
  });
});
//   Side bar:
$(function () {
  $("#sidebarCollapse").click(function () {
    $(".wrapper").toggle();
  });

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
});
