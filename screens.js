function displayScreen1() {
	//console.log(i);
	text(overUnderNumbers[overUnderNumbers.length - 1], w / 2, h / 2 - 100);
	overKnap.display();
	underKnap.display();
}

function displayScreen2() {
	drawWheel();

	image(img3, -800, -300);
	image(img2, 250, -250);
	image(img4, 100, -350, 285, 225);
}

function displayHomeScreen() {
	image(img1, 150, 0);
	image(img2, 850, 150);
}
