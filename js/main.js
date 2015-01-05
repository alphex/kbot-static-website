	// navigation scroll to
	$(document).ready(function() {

		//Default  
		$("#link1").anchorScroll();
		$("#link2").anchorScroll();
		$("#link3").anchorScroll();

	});

	//Initial load of page
	$(document).ready(sizeContent);

	//Every resize of window
	$(window).resize(sizeContent);

	//Dynamically assign height
	function sizeContent() {
	    var newHeight = $("html").height() - $("#header").height() + "px";
	    $("#sitecontent").css("height", newHeight);
	}