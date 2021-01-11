function displayScreen1() {
	//console.log(i);
	textSize(25);
	text(
		'Sidste tal: ' + overUnderNumbers[overUnderNumbers.length - 1],
		w / 2 - 20,
		h / 2 - 100
	);
	overKnap.display();
	underKnap.display();
}

function displayScreen2() {
	drawWheel();

	//image(img3, -800, -300);
	//image(img2, 250, -250);
	//image(img4, 100, -350, 285, 225);
}

function displayHomeScreen() {
	background(...backgroundColor);
	image(img1, 150, 0);
	image(img2, 850, 150);
	rect(0, 0, 10, 10);
}
