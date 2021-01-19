class customButton {
	constructor(x, y, wh, text, img = false) {
		this.x = x;
		this.y = y;
		this.w = wh;
		this.h = wh;
		this.text = text;
		this.img = img;
	}
	display() {

		fill(255);


		rect(this.x, this.y, this.w, this.h);


		this.img ? image(this.img, this.x, this.y, this.w, this.h) : false;


		fill(0);


		textAlign(CENTER, CENTER);
		text(this.text, this.x + this.w / 2, this.y + this.h / 2);


		textAlign(LEFT, BASELINE);
	}
	checkPress() {

		const X = mouseX;
		const Y = mouseY;



		if (
			X >= this.x &&
			Y >= this.y &&
			X <= this.x + this.w &&
			Y <= this.y + this.h
		) {
			return true;
		} else return false;
	}
}
