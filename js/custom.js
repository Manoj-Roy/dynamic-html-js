jQuery(document).ready(function($) {
    $(".nav li a").click(function(event) {
      /* Act on the event */
      var getLink = $(this).attr('link');
      localStorage.setItem("link",getLink);
    });
    localFunc()
  });

  localFunc = function() {
    var gLinkLoad = localStorage.getItem('link');
      $(".tab-pane").removeClass('in active');
      $(".nav li").removeClass('active')
      $("#"+gLinkLoad).addClass('in active');
      $("[link="+gLinkLoad+"]").parent('li').addClass('active');
  }