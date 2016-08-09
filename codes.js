function Button() {
	var box1 = document.getElementsByName('Box1')[0].value;
	var box2 = document.getElementsByName('Box2')[0].value;
	var out = parseFloat(box1) * parseFloat(box2);
	document.getElementsByName('output')[0].value= out;
}