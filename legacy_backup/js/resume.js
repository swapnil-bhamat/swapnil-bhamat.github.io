(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });

  var renderExperienceYear = function() {
    var carrierStartedDate = new Date(2013, 6, 3);
    var diffTillNow = Date.now() - carrierStartedDate.getTime();
    var experienceDate = new Date(diffTillNow);
    var year = Math.abs(experienceDate.getUTCFullYear()) - 1970;
    var month = Math.abs(experienceDate.getUTCMonth()) + 1;
    year = month === 12 ? year + 1 : year;
    month = month === 12 ? 0 : month;
    var experience = year + "." + month;
    $("#experience").html(experience);
  };
  renderExperienceYear();
})(jQuery); // End of use strict
