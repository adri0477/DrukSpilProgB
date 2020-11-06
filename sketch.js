// <reference path="./p5.global-mode.d.ts" />
// Ignore the line above. It is for vscode p5 integration.

const w = 600;
const h = 600;

//Set framerate var
const fR = 60;

//Background color of the main view
const backgroundColor = [200];

function setup() {
	//Create main canvas which the user sees
	createCanvas(w, h);

	//Set framerate
	frameRate(fR);

	//Set background color
	background(...backgroundColor);
}

function draw() {}

//AAHC ❤
