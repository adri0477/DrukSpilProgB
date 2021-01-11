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

let overUnderNumbers = [];

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
	w = windowWidth;
	h = windowHeight;

	//Create main canvas which the user sees
	createCanvas(w, h);

	//Set framerate
	frameRate(fR);

	//Set background color
	background(...backgroundColor);

	//Run the function that initializes the selectBox/list
	selInit();

	//Buttons for over under
	overKnap = new customButton(w / 2 - 55, h / 2, 100, 'Over');
	underKnap = new customButton(w / 2 + 55, h / 2, 100, 'Under');

	//Setup wheel
	setupWheel();

	//Log that setup is now done
	console.log('Load succeeded');

	switch (window.location.search.substr(1)) {
		case 'p=0':
			sel.selected('Home');
			screen = 0;
			break;
		case 'p=1':
			initGame1();
			sel.selected('Drukspil #1');
			screen = 1;
			break;
		case 'p=2':
			sel.selected('Drukspil #2');
			screen = 2;
			break;
		default:
			window.location.href = window.location.href + '?p=0';
			break;
	}
}

function draw() {
	//Draw background.
	background(...backgroundColor);

	switch (screen) {
		case 0:
			displayHomeScreen();
			break;
		case 1:
			displayScreen1();
			break;
		case 2:
			displayScreen2();
			break;
		default:
			displayHomeScreen();
			break;
	}
}

//Runs every time the left mb is clicked
function mouseClicked() {
	if (overKnap.checkPress()) {
		const prevNum = overUnderNumbers[overUnderNumbers.length - 1];
		overUnderNumbers.push(getRandomInt(7));
		const newNum = overUnderNumbers[overUnderNumbers.length - 1];

		if (newNum > prevNum) {
			//Guessed correct
			overUnderSlurke += 1;
		} else if (newNum === prevNum) {
			//New number is the same as the old
		} else {
			//Guessed wrong
			alert('Drik ' + overUnderSlurke + ' slurke!');
			overUnderSlurke = 0;
		}
	}
	if (underKnap.checkPress()) {
		const prevNum = overUnderNumbers[overUnderNumbers.length - 1];
		overUnderNumbers.push(getRandomInt(7));
		const newNum = overUnderNumbers[overUnderNumbers.length - 1];

		if (newNum < prevNum) {
			//Guessed correct
			overUnderSlurke += 1;
		} else if (newNum === prevNum) {
			//New number is the same as the old
		} else {
			//Guessed wrong
			alert('Drik ' + overUnderSlurke + ' slurke!');
			overUnderSlurke = 0;
		}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//AAHC ❤
//homoer
