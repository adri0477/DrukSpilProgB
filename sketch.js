// <reference path="./p5.global-mode.d.ts" />
// Ignore the line above. It is for vscode p5 integration.

let sel;

let screen = 0;

let w = 500;
let h = 500;

//Set framerate var
const fR = 60;

//Background color of the main view
const backgroundColor = [211, 211, 211];

//
let img, img1, img2;
function preload() {
	img1 = loadImage('./billeder/toast.png');
	img2 = loadImage('./billeder/toast.png');

	w = windowWidth - 5;
	h = windowHeight - 5;
}

function setup() {
	//Create main canvas which the user sees
	createCanvas(w, h);

	//Set framerate
	frameRate(fR);

	//Set background color
	background(...backgroundColor);

	selInit();
	knap1 = new customButton(100, 100, 100, 'Over under');

	console.log('Load succeeded');
}

function draw() {
	background(...backgroundColor);

	if (screen === 0) {
		image(img1, 150, 150);
		image(img2, 850, 150);
	}
	knap1.display();
}

function mouseClicked() {
	if (knap1.checkPress()) {
		alert('PRESSED');
	}
}

//AAHC ❤
//homoer
