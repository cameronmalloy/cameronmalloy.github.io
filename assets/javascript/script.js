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

	$('.nav-section').hover(function() {
		$(this).css({'padding-bottom': '6px', 'border-bottom':'1.5px solid #000'});
	}, function() {
		$(this).css({'padding-bottom': '0px', 'border-bottom': 'none'})
	});

	/*$('.item').hover(function() {
		$(this).find('.item-info').slideUp(50);
	}, function() {
		$(this).find('.item-info').slideDown(50);
	});*/

	$('.item').hover(function() {
		$(this).find('.item-info').slideUp(50);
		$(this).find('.item-big-info').animate({'width': '85%'}, 150);
		$(this).find('.item-big-info').css({'color': 'white'});
	}, function() {
		$(this).find('.item-info').slideDown(50);
		$(this).find('.item-big-info').animate({'width': '0px',}, 150);
		$(this).find('.item-big-info').css({'color': 'rgba(0, 0, 0, 0)'});
	});

});
