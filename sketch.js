// <reference path="./p5.global-mode.d.ts" />
// Ignore the line above. It is for vscode p5 integration.

//Set global var for which screen to display.
let screen = 0;

//Set standard screen width and height.
let w = 500;
let h = 500;

//Set framerate
const fR = 60;

//Background color
const backgroundColor = [211, 211, 211];

//Initialize three vars
let img, img1, img2;

//Preload runs before setup and should only contain images fonts, and files to be loaded.
function preload() {
	//Set img1 and img2 to their respective images
	img1 = loadImage('./billeder/juletræ.png');
	img2 = loadImage('./billeder/juletoast.png');
	img3 = loadImage('./billeder/juletræ.png');
	img4 = loadImage('./billeder/julemandskort.png');
}

//Setup runs once before drawing the first frame and never again.
function setup() {
	//Set screen width and height to the window width and height minus five to eliminate scrollbars
	w = windowWidth - 5;
	h = windowHeight - 5;

	//Create main canvas which the user sees
	createCanvas(w, h);

	//Set framerate
	frameRate(fR);

	//Set background color
	background(...backgroundColor);

	//Run the function that initializes the selectBox/list
	selInit();

	//Create a new button called knap1 from the customButton class in classes.js
	//knap1 = new customButton(100, 100, 100, 'Over under'); fix det her hvis i vil have det, det er inde på Drukspil 2. No good
	udfordring = new customButton(200, 200, 100, 'ud');

	//Log that setup is now done
	console.log('Load succeeded');
}

function draw() {
	//Draw background.
	background(...backgroundColor);

	//If the screen is 0 then display two images
	switch (screen) {
		case 0:
			image(img1, 150, 0);
			image(img2, 850, 150);
			break;
		case 1:
			displayScreen1();
			break;
		case 2:
			displayScreen2();
			break;
		default:
			break;
	}

	//Display knap1 with its own method
	//knap1.display(); fix det her hvis i vil have det, det er inde på Drukspil 2. No good
}

//Runs every time the left mb is clicked
function mouseClicked() {
	//If knap1.checkPress returns true then run code
	if (knap1.checkPress()) {
		//CODE
		alert('HOHO glædelig jul');
	}
	if (udfordring.checkPress()) {
	}
}

//AAHC ❤
//homoer
