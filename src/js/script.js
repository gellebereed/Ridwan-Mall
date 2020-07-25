$('.detail-box').mouseover(function() {
	$(this).removeClass('hide').parent().css('transform', 'scale(1.06)');
});

$('.detail-box').mouseout(function() {
	$(this).addClass('hide').parent().css('transform', 'scale(1)');
});
