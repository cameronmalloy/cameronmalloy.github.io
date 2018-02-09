$(document).ready(function(){
	var waypoint = new Waypoint({
		element: document.getElementById('nav'),
		handler: function(direction) {
			if(direction == 'down') {
				$('#nav').css({'position':'fixed',
					'top':'0px',
					'background-color':'rgba(253, 250, 243, 0.9)'})
			} else {
				$('#nav').css({'position':'relative',
					'top':'auto',
					'background-color':'rgba(0, 0, 0, 0)'})
			}
		}
	})

	$('.half-circle').click(function() {
		window.scrollTo({'behavior':'smooth', 'top': 0});
	})

	$('.nav-section').hover(function() {
		$(this).css({'padding-bottom': '6px', 'border-bottom':'1.5px solid #000'});
	}, function() {
		$(this).css({'padding-bottom': '0px', 'border-bottom': 'none'})
	});

});
