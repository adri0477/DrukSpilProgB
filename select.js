///<reference path="p5.d.ts" />

let sel;

function selInit() {

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
			initGame1();
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
