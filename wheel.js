/**
 * Wheel Of Fortune
 * Çarkıfelek
 * v.0
 *
 * author: Abdulsamet Şahin
 *
 * ivme(acceleration): çarkın dönüş hızı, giderek azalıyor bu sayede çark başta hızlı sona doğru yavaş dönüyor.
 * pies: array, dilimleri içerir
 * count: dilim sayısı
 * angle: her bir dilimin, bir kenarı ile diğer kenarı arasındaki iç açısı
 */

let count = 6;
let angle = 360 / count;
ivme = 0;
tsize = 20;
pies = [];

/**
 *
 * @param {Pie} winner
 * EN: It only runs at the end of the spinning
 * TR: Çarkın dönüşü bittiğinde çalışır.
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
 * EN: It only runs when the spinning starts.
 * TR: Çark dönmeye başladığında çalışır.
 */
function onStarted(ivme) {
	console.log('Started');
}

/**
 * EN: Start spinning again.
 * TR: Tekrar döndür.
 */
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

	/**
	 * To rotate things by using degrees.
	 */
	angleMode(DEGREES);

	/**
	 * Calculates the acceleration.
	 * +1 means, we don't want to get 0 from the random func.
	 * 4 can be changed. Its for speed.
	 */
	ivme = (random(4) + 1) / 10;
	for (i = 0; i < count; i++) {
		/**
		 * We create our pies
		 */

		pies.push(new Pie(i, 'Drik ' + i + ' slurke', 0, 135, 62));
	}
}
//let f = [red, green, 31231];

/**
 * This function is a loop.
 */
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
	// Center circle
	ellipse(0, 0, 120, 120);
	// The stick.
	triangle(0, -180, -10, -240, 10, -240);

	// decrement the acceleration every loop to make wheel stop.
	ivme -= 0.001;

	// if the acceleration is smaller then 1, we must to break the loop.
	if (ivme <= 0) {
		// breaks the loop
		noLoop();
		// refresh framecount
		frameCount = 0;
		// detect the winner
		pies.forEach((pie) => {
			// our stick is pointing 270
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

	/**
	 * Spinning.
	 */
	this.move = function () {
		this.order += ivme;
	};

	/**
	 * Displays the pies with new calculated starting and ending points (angles).
	 */
	this.display = function () {
		push();
		fill(this.r, this.g, this.b);
		newAngle = this.order * angle;

		arc(0, 0, 400, 400, newAngle, newAngle + angle, PIE);
		this.aralik = [newAngle, newAngle + angle];
		pop();
	};

	/**
	 * Displays the texts.
	 */
	this.write = function () {
		push();
		fill(255);
		textSize(tsize);
		rotate(this.order * angle + angle / 2);
		text(this.t, 80, -angle / 2, 200, tsize * 2);
		pop();
	};
}
