$(document).ready(function(){

	$('.nav-section').hover(function() {
		$(this).css({'padding-bottom': '6px', 'border-bottom':'1.5px solid #000'});
	}, function() {
		$(this).css({'padding-bottom': '0px', 'border-bottom': 'none'})
	});

	$('.half-circle').click(function() {
		window.scrollTo({'behavior':'smooth', 'top': 0});
	})
	
	$('#button1').click(function() {
		var button1Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36
		window.scrollTo({'behavior':'smooth', 'left': '0', 'top': button1Height});
	});

	$('#button2').click(function() {
		var button2Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + $('#journey-title-1').height() + $('.p1').height()
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': button2Height});
	});

	$('#button3').click(function() {
		var button3Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + $('#journey-title-1').height() + $('.p1').height() + $('#journey-title-2').height() + $('.p2').height()
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': button3Height});
	});



});