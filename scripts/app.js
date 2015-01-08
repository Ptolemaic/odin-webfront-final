$(document).ready(function() {

	var rows = $('input[name=\'rows\']').val();
	var cols = $('input[name=\'cols\']').val();
	var boxes = $('input[name=\'boxes\']').val();

	for (var i = 0; i < 1024; i++)
		$('#container').append('<div class="gridbox"></div>');

	$('.gridbox')
		.click(function() {
			$(this).css("background-color", "white");
		})
		.hover(function() {
			$(this).css("background-color", "blue");
		}, function() {
			//$(this).css("background-color", "white");
	});

	$('#clear')
		.mousedown(function() {
			$('.gridbox').css("background-color", "white");
			$(this).css("background-color", "#66FF99");
		})
		.mouseup(function() {
			$(this).css("background-color", "#555555");
	});

	$('#reset')
		.mousedown(function() {
			$('input[name=\'rows\']').val(0);
			$('input[name=\'cols\']').val(0);
			$('input[name=\'boxes\']').val(0);
			$(this).css("background-color", "#66FF99");
		})
		.mouseup(function() {
			$(this).css("background-color", "#555555");
	});

	$('button')
		.hover(function() {
			$(this).css("background-color", "#666666");
		}, function() {
			$(this).css("background-color", "#555555");
			$(this).css("color", "#DDDDDD");
	});

	$('input[name=\'rows\']').change(function() {
		var rows = $('input[name=\'rows\']').val();
		console.log(rows);
	});

	$('input[name=\'cols\']').change(function() {
		var cols = $('input[name=\'cols\']').val();
		console.log(cols);
	});

	$('input[name=\'boxes\']').change(function() {
		var boxes = $('input[name=\'boxes\']').val();
		console.log(boxes);
	});
});