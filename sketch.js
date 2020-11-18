// <reference path="./p5.global-mode.d.ts" />
// Ignore the line above. It is for vscode p5 integration.

let w = 500;
let h = 500;

//Set framerate var
const fR = 60;

//Background color of the main view
const backgroundColor = [255];

function preload() {
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

	knap1 = new customButton(100, 100, 100, 'Over under');

	console.log('Load succeeded');
}

function draw() {
	knap1.display();
}

function mouseClicked() {
	if (knap1.checkPress()) {
		alert('PRESSED');
	}
}

//AAHC ❤
//homoer
