///<reference path="p5.d.ts" />
//Set global var for the selectBox
let sel;

function selInit() {
	//textAlign(CENTER);
	sel = createSelect();
	sel.size(90, 40);

	sel.position(10, 10);
	sel.option('Home');
	sel.option('Drukspil #1');
	sel.option('Drukspil #2');
	sel.option('Drukspil #3');
	sel.option('Drukspil #4');
	sel.selected('Home');
	sel.changed(mySelectEvent);
}

function mySelectEvent() {
	let item = sel.value();
	console.log(item);
	if (item === 'Drukspil #1') {
		overUnderArray.push(getRandomInt(6));

		screen = 1;
	} else if (item === 'Drukspil #2') {
		screen = 2;
	} else if (item === 'Home') {
		screen = 0;
	} else screen = 0; //Fallback to home screen if invalid option is selected
}
