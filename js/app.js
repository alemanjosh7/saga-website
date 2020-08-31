(function($) {
  $(document).ready(function() {
    // Pause hero carousel
    $(".hero-carousel").carousel("pause");
  });
})(jQuery);

$(document).ready(function() {
  var $navbar = $("#mNavbar");

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
    AdjustHeader();
  });

  function AdjustHeader() {
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
});
