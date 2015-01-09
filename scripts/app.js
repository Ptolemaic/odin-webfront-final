$(document).ready(function() {

	// Grab default grid input values
	var rows = $('input[name=\'rows\']').val();
	var cols = $('input[name=\'cols\']').val();
	var pixels = $('input[name=\'pixels\']').val();

	// Spicing up the buttons
	$('button')
		.hover(function() {
			$(this).css("background-color", "#666666");
		}, function() {
			$(this).css("background-color", "#555555");
			$(this).css("color", "#DDDDDD");
		})
		.mousedown(function() {
			$(this).css("background-color", "#66FF99");
		})
		.mouseup(function() {
			$(this).css("background-color", "#555555");
	});

	// Initialize draw grid with default values
	fillGrid(rows, cols);
	startDraw();


	// User input is automatically stored when changed
	$('input[name=\'rows\']').change(function() {
		var rows = $('input[name=\'rows\']').val();
		console.log(rows);
	});

	$('input[name=\'cols\']').change(function() {
		var cols = $('input[name=\'cols\']').val();
		console.log(cols);
	});

	$('input[name=\'pixels\']').change(function() {
		var pixels = $('input[name=\'pixels\']').val();
		console.log(pixels);
	});
});

function fillGrid(rows, cols) {
	emptyGrid();
	for (var i = 0; i < (rows * cols); i++)
		$('#container').append('<div class="gridbox"></div>');
}


function emptyGrid() {
	$('.gridbox').each(function() {
		$(this).remove();
	});
}

function startDraw() {
	$('.gridbox')
		.click(function() {
			$(this).css("background-color", "white");
		})
		.hover(function() {
			$(this).css("background-color", "blue");
	});
}

function clearInput() {
	$('input[name=\'rows\']').val(0);
	$('input[name=\'cols\']').val(0);
	$('input[name=\'pixels\']').val(0);
}

function resetGrid() {
	$('.gridbox').css("background-color", "white");
}

function go() {
	var rows = $('input[name=\'rows\']').val();
	var cols = $('input[name=\'cols\']').val();
	var pixels = $('input[name=\'pixels\']').val();
	fillGrid(rows, cols);
	startDraw();
}