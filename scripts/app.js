var drawColor = "blue";

$(document).ready(function() {

	// Grab default grid input values
	var boxes = $('input[name=\'boxes\']').val();

	// Spicing up the buttons
	$('.inputButton')
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

	$('.colorButton')
		.mousedown(function() {
			$('.colorButton').css("border", "none")
			$(this).css("border", "2px dashed orange");
	});

	// Initialize draw grid with default values
	fillGrid(boxes);
	startDraw();

	// User input is automatically stored when changed
	$('input[name=\'boxes\']').change(function() {
		boxes = $('input[name=\'boxes\']').val();
	});
});

function fillGrid(boxes) {
	emptyGrid();
	for (var i = 0; i < (boxes); i++)
		$('#container').append('<div class="gridbox"></div>');

	var span = Math.sqrt(boxes);
	var size = 800 / span;

	$('.gridbox').css("width", size);
	$('.gridbox').css("height", size);
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
			$(this).css("background-color", drawColor);
	});
}

function resetGrid() {
	$('.gridbox').css("background-color", "white");
}

function go() {
	var boxes = $('input[name=\'boxes\']').val();
	fillGrid(boxes);
	startDraw();
}

function useRed() {
	drawColor = "red";
	startDraw();
}

function useBlue() {
	drawColor = "blue";
	startDraw();
}

function useGreen() {
	drawColor = "green";
	startDraw();
}

function useYellow() {
	drawColor = "yellow";
	startDraw();
}

function usePurple() {
	drawColor = "purple";
	startDraw();
}