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
	sel.changed(onSelectChange);
}

function onSelectChange() {
	const item = sel.value();
	console.log('Selected screen: ' + item);

	switch (item) {
		case 'Drukspil #1':
			window.history.pushState('1', 'Drukspil 1', '/?p=1');
			overUnderNumbers.push(getRandomInt(6));
			screen = 1;
			break;
		case 'Drukspil #2':
			window.history.pushState('2', 'Drukspil 2', '/?p=2');
			screen = 2;
			break;
		case 'Home':
			window.history.pushState('0', 'Home', '/?p=0');
			screen = 0;
			break;
		default:
			window.history.pushState('0', 'Home', '/?p=0');
			screen = 0;
			break;
	}
}
