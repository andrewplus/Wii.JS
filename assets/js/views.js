// manages loading and changing views
// partly recycled from another project of mine
// very wip

// functions

function preloadImage(url) {
  var img=new Image();
  img.src=url;
}

function changeView(v, t) {
  // transition in
  if (t != "none") {
    if (t == "fade") {
      $(".app").fadeOut("fast", "linear", function() {
        loadViewContents(v, t);
      });
    }
  } else {
    loadViewContents(v, t);
    $(".app").show();
  }
}

function loadViewContents(v, t) {
  $(".app").load("views/" + v + ".html", function() {
    $('selector').waitForImages(function() {
      if (v === "menu") {
        // append date
        $(document).find( ".date" ).html( "<span> " + date + "</span>" );
      }

      if (v === "settings-main") {
        setTimeout(function(){
          $( ".settings-navcontainer" ).addClass( "animate" );
          $( ".settings-header" ).addClass( "animate" );
          $( ".settings-footer" ).addClass( "animate" );
        }, 300);
      }
    });

    currentView = v;

    // transition out
    if (t != "none") {
      if (t == "fade") {
        $(".app").fadeIn( "fast", "linear" );
      }
    }
  });
}

// run after document load

$( document ).ready(function() {

  currentView = "default";
  previousView = "default";
  $(".app").hide();

  // view change on click
  $("body").on("click", ".viewchange", function() {
	   viewtoChange = $(this).data("view");
     transition = $(this).data("transition");
     previousView = currentView;

     changeView(viewtoChange, transition);
	});


  // startup
  changeView("menu", "fade");

});
