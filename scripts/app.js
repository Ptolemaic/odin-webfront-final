$(document).ready(function() {

	var blank = true;

	for (var i = 0; i < 1024; i++)
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
	});

	$('#clear').hover(function() {
		$(this).css("background-color", "#666666");
		//$(this).css("color", "#555555");
	}, function() {
		$(this).css("background-color", "#555555");
		$(this).css("color", "#DDDDDD");
	});

	$('#clear').click(function() {
		$(this).css("background-color", "green");
	});

});