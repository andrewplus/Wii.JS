// manages loading and changing views
// partly recycled from another project of mine
// very wip

//variables
transitionLength = 300;

// functions

function preloadImage(url) {
  var img=new Image();
  img.src=url;
}

function changeView(v, t) {
  // transition in
  if (t != "none") {
    if (t == "fade") {
      $( ".black" ).addClass( "animate" );
      $( ".black" ).css( {"top" : "0"} );
      setTimeout(function(){
        loadViewContents(v, t);
      }, transitionLength);
    }
  } else {
    loadViewContents(v, t);
  }
}

function loadViewContents(v, t) {
  $(".app").load("views/" + v + ".html", function() {
    setTimeout(function(){
      $('.app').imagesLoaded( { background: '*' }, function() {
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

        currentView = v;

        // transition out
        if (t != "none") {
          if (t == "fade") {
            $( ".black" ).removeClass( "animate" );
            if (v === "menu") {
              // play menu music
              var music = document.getElementById("bg-music");
            	music.play();

              // play startup sound if it's the first time
              if (previousView === "default") {
                var music = document.getElementById("startup");
              	music.play();
              }
            }
            setTimeout(function(){
              $( ".black" ).css( {"top" : "100vh"} );
            }, transitionLength);
          }
        }

        console.log("yeet");
      });
    }, 100);
  });
}

// run after document load

$( document ).ready(function() {

  currentView = "default";
  previousView = "default";
  $(".black").show();

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
