$(document).ready(function(){

	$('.nav-section').hover(function() {
		$(this).css({'padding-bottom': '6px', 'border-bottom':'1.5px solid #000'});
	}, function() {
		$(this).css({'padding-bottom': '0px', 'border-bottom': 'none'})
	});
	
	$('#button1').click(function() {
		var button1Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 +
							$('.intro-paragraph').height();
		window.scrollTo({'behavior':'smooth', 'left': '0', 'top': button1Height});
	});

	$('#button2').click(function() {
		var button2Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + 
							$('#fishes-title-1').height() + $('.p1').height() + $('.intro-paragraph').height();
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': button2Height});
	});

	$('#button3').click(function() {
		var button3Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + 
							$('#fishes-title-1').height() + $('.p1').height() + $('#fishes-title-2').height() + $('.p2').height() +
							$('.intro-paragraph').height();
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': button3Height});
	});

	$('#button4').click(function() {
		var button3Height = $('#nav-post').height() + $('#cover-img-post').height() + $('.button-nav').height() - 36 + 
							$('#fishes-title-1').height() + $('.p1').height() + $('#fishes-title-2').height() + $('.p2').height() + 
							$('#fishes-title-3').height() + $('p3').height() + $('.intro-paragraph').height();
		window.scrollTo({'behavior': 'smooth', 'left': '0', 'top': button3Height});
	});


	/*$('#source').hover(function() {
		$(this).css({'background-color': 'black', 'color': 'white'});
	} function() {
		$(this).css({'background-color': '#fdfaf3', 'color': 'black'});
	});*/



});