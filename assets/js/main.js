//delay
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

// distance between elements (center)
function distanceBetween(elem1, elem2) {
    var e1Rect = elem1.getBoundingClientRect();
    var e2Rect = elem2.getBoundingClientRect();
    var dx = (e1Rect.left+(e1Rect.right-e1Rect.left)/2) - (e2Rect.left+(e2Rect.right-e2Rect.left)/2);
    var dy = (e1Rect.top+(e1Rect.bottom-e1Rect.top)/2) - (e2Rect.top+(e2Rect.bottom-e2Rect.top)/2);
    var dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
}

// UI audio
function hover(){
	var audio = document.getElementById("hover");
	audio.play();
}

// click audio
function select(){
	var audio = document.getElementById("select");
	audio.play();
}

// zip audio
function zip(){
	var audio = document.getElementById("zip");
	audio.play();
	select();
	var music = document.getElementById("bg-music");
	music.pause();
}

// back
function back(){
	var audio = document.getElementById("back");
	audio.play();
}

// date
const monthNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const d = new Date();

weekday = monthNames[d.getDay()];
day = d.getDate();
month = d.getMonth() + 1;
date = weekday + " " + month + "/" + day;

$( document ).ready(function() {
  // go to main menu when channel is clicked
	$("body").on("click", ".occupied .hover", function(){
		var centerX = $(this).offset().left + $(this).width() / 2;
		var centerY = $(this).offset().top + $(this).height() / 2;
		$( ".main-menu" ).css( {"transform-origin" : centerX + "px " + centerY + "px 0px"} );

    var img = $( this ).attr( "data-img" );
		$( ".splash-screen" ).css( {"background-image" : " url(" + img + ")", "transform-origin" : centerX + "px " + centerY + "px 0px"} );

		$( ".main-menu" ).addClass( "channel-splash" );
		$( "body" ).addClass( "channel-splash" );
		delay(function(){
			$( "body" ).removeClass( "splash-switch" );
		}, 900 );
	});

	// back to main menu
	$("body").on("click", ".menu-btn", function(){
		$( ".main-menu" ).removeClass( "channel-splash" );
		$( "body" ).removeClass( "channel-splash" );
		$( "body" ).addClass( "splash-switch" );
		var music = document.getElementById("bg-music");
		music.play();
		delay(function(){
			$( "body" ).removeClass( "splash-switch" );
		}, 900 );
	});

	// ignore screen warning
	$("body").on("click", ".screen-message", function(){
		$( ".screen-message" ).addClass( "hidden" );
	});
});
