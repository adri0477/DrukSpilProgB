class customButton {
	constructor(x, y, wh, text) {
		this.x = x;
		this.y = y;
		this.w = wh;
		this.h = wh;
		this.text = text;
	}
	display() {
		rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
		textAlign(CENTER, CENTER);
		text(this.text, this.x, this.y);
	}
	checkPress() {
		const X = mouseX;
		const Y = mouseY;
		if (
			X > this.x - this.w / 2 &&
			Y > this.y - this.h / 2 &&
			X < this.x + this.w / 2 &&
			Y < this.y + this.h / 2
		) {
			return true;
		} else {
			return false;
		}
	}
}
