$(document).ready(function() {

	for (var i = 0; i < 256; i++)
		$('#container').append('<div class="gridbox"></div>');

	$('.gridbox').click(function() {
		$(this).css("background-color", "white");
	});

	$('.gridbox').hover(function() {
		$(this).css("background-color", "blue");
	}, function() {
		//$(this).css("background-color", "white");
	});

	$('button').click(function() {
		$('.gridbox').css("background-color", "white");
	})

});