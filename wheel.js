let count = 6;
let angle = 360 / count;
ivme = 0;
tsize = 20;
pies = [];

/**
 *
 * @param {Pie} winner
 */
function onFinished(winner) {
	console.log('winner -> ', winner);
	fill(0);
	//rect(150, -280, 200, 50);
	fill(255);
	textSize(32);
	text(winner.t, 150 + 10, -280 + 8, 200, 100);
}
/**
 *
 * @param {numeric} ivme
 */
function onStarted(ivme) {
	console.log('Started');
}

function spin() {
	if (ivme > 0) {
		return {
			status: 'error',
			message: 'fejl',
		};
	}
	ivme = (random(4) + 1) / 10;
	loop();
	onStarted(ivme);
	return true;
}

function doubleClicked() {
	console.log('DCLICKED');
	if (screen === 2) {
		spin();
	}
}

function setupWheel() {
	//createCanvas(displayWidth, displayHeight);

	angleMode(DEGREES);

	ivme = (random(4) + 1) / 10;
	for (i = 0; i < count; i++) {

		pies.push(new Pie(i, 'Drik ' + i + ' slurke', 0, 135, 62));
	}
}
//let f = [red, green, 31231];


function drawWheel() {
	/////////////////////////
	if (frameCount <= 1) {
		onStarted(ivme);
	}
	////////////////////////
	background(144);

	translate(width / 2, height / 2);

	for (i = 0; i < count; i++) {
		pies[i].move();
		pies[i].display();
	}

	for (i = 0; i < count; i++) {
		pies[i].write();
	}

	fill(214, 0, 28);

	ellipse(0, 0, 120, 120);

	triangle(0, -180, -10, -240, 10, -240);

	ivme -= 0.001;


	if (ivme <= 0) {

		noLoop();

		frameCount = 0;

		pies.forEach((pie) => {

			if (pie.aralik[0] % 360 <= 270 && pie.aralik[1] % 360 >= 270) {
				onFinished(pie);
			}
		});
	}
}

/**
 *
 * @param {int} order
 * @param {string} a the text of pie
 * @param {int} r red
 * @param {int} g green
 * @param {int} b blue
 */
function Pie(order, a, r, g, b) {
	this.orderPerm = order;
	this.order = order;
	this.aralik = null;
	this.t = a;
	this.r = r;
	this.g = g;
	this.b = b;


	this.move = function () {
		this.order += ivme;
	};


	this.display = function () {
		push();
		fill(this.r, this.g, this.b);
		newAngle = this.order * angle;

		arc(0, 0, 400, 400, newAngle, newAngle + angle, PIE);
		this.aralik = [newAngle, newAngle + angle];
		pop();
	};

	this.write = function () {
		push();
		fill(255);
		textSize(tsize);
		rotate(this.order * angle + angle / 2);
		text(this.t, 80, -angle / 2, 200, tsize * 2);
		pop();
	};
}
