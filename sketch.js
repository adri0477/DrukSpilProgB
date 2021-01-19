
let screen = 0;


let w = 500;
let h = 500;


const fR = 60;


const backgroundColor = [211, 211, 211];


let img, img1, img2;

let overUnderNumbers = [];


function preload() {

	img1 = loadImage('./billeder/juletræ.png');
	img2 = loadImage('./billeder/juletoast.png');
	img3 = loadImage('./billeder/juletræ.png');
	img4 = loadImage('./billeder/julemandskort.png');
}


function setup() {

	w = windowWidth;
	h = windowHeight;


	createCanvas(w, h);


	frameRate(fR);


	background(...backgroundColor);


	selInit();


	overKnap = new customButton(w / 2 - 55, h / 2, 100, 'Over');
	underKnap = new customButton(w / 2 + 55, h / 2, 100, 'Under');


	setupWheel();


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


function mouseClicked() {
	if (overKnap.checkPress()) {
		const prevNum = overUnderNumbers[overUnderNumbers.length - 1];
		overUnderNumbers.push(getRandomInt(7));
		const newNum = overUnderNumbers[overUnderNumbers.length - 1];

		if (newNum > prevNum) {

			overUnderSlurke += 1;
		} else if (newNum === prevNum) {

		} else {

			alert('Drik ' + overUnderSlurke + ' slurke!');
			overUnderSlurke = 0;
		}
	}
	if (underKnap.checkPress()) {
		const prevNum = overUnderNumbers[overUnderNumbers.length - 1];
		overUnderNumbers.push(getRandomInt(7));
		const newNum = overUnderNumbers[overUnderNumbers.length - 1];

		if (newNum < prevNum) {

			overUnderSlurke += 1;
		} else if (newNum === prevNum) {

		} else {

			alert('Drik ' + overUnderSlurke + ' slurke!');
			overUnderSlurke = 0;
		}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

