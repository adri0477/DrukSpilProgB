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
		//Display box that forms the button
		rect(this.x, this.y, this.w, this.h);

		//Display image in center of box if there is an image
		this.img ? image(this.img, this.x, this.y, this.w, this.h) : false;

		//Set textAlign to center, center and display the text for the button
		textAlign(CENTER, CENTER);
		text(this.text, this.x + this.w / 2, this.y + this.h / 2);

		//Set textAlign to default
		textAlign(LEFT, BASELINE);
	}
	checkPress() {
		//Set X and Y vars to mouse location
		const X = mouseX;
		const Y = mouseY;

		/*
		If mouse xpos and ypos is larger than x and y of the button. 
		and mouse xpos and ypos aren't larger than x + width and y + height of the button. 
		Then the mouse is inside the button. 
		If the mouse is inside the button return true. 
		Else return false
		*/

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
