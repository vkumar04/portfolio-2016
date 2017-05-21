$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 900) {
      $("#navbar, #logo a, #navbar nav a").removeClass("bg1");
      $("#navbar, #logo a, #navbar nav a").removeClass("bg2");
      $("#navbar, #logo a, #navbar nav a").addClass("bg0");
    }
    if (scroll > 1800) {
      $("#navbar, #logo a, #navbar nav a").removeClass("bg0");
      $("#navbar, #logo a, #navbar nav a").removeClass("bg2");
      $("#navbar, #logo a, #navbar nav a").addClass("bg1");
    }
    if (scroll > 2800) {
      $("#navbar, #logo a, #navbar nav a").removeClass("bg1")
        $("#navbar, #logo a, #navbar nav a").addClass("bg2");
    }
    else if(scroll <= 899){
      $("#navbar, #logo a, #navbar nav a").removeClass("bg1");
      $("#navbar, #logo a, #navbar nav a").removeClass("bg2");
      $("#navbar, #logo a, #navbar nav a").removeClass("bg0");
    }
});
