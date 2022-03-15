$(document).ready(function () {
  console.log("loard data...");

  $(".portfolio-tab-header li ").click(function () {
    // current tab data ID
    var tabId = $(this).attr("value");
    console.log(tabId);

    //remove active
    $(".portfolio-tab-header li, .portfolio-tab-content-box").removeClass(
      "active"
    );

    //selected header
    $(this).addClass("active");

    //tab content show
    $("#" + tabId).addClass("active");
  });
});
