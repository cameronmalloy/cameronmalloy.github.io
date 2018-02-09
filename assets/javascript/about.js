$(document).ready(function(){

	$('.nav-section').hover(function() {
		$(this).css({'padding-bottom': '6px', 'border-bottom':'1.5px solid #000'});
	}, function() {
		$(this).css({'padding-bottom': '0px', 'border-bottom': 'none'})
	});

		$('.half-circle').click(function() {
		window.scrollTo({'behavior':'smooth', 'top': 0});
	})
	
	$('#inspiration').click(function() {
		var inspirationHeight = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36
		window.scrollTo({'behavior':'smooth', 'left': '0', 'top': inspirationHeight});
	});

	$('#about-me-button').click(function() {
		var aboutMeHeight = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + $('.inspiration-pic').height() + $('.p1').height()
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': aboutMeHeight});
	});



});