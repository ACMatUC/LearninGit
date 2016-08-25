function button() {
	var number1 = document.getElementById('Number1').value;
  	var number2 = document.getElementById('Number2').value;
	var out = parseFloat(number1) * parseFloat(number2);
	document.getElementById('output').innerText = out;
    var message = "Congrats on learning git at the ACM meeting";
    document.getElementById("MessageBoc").innerText = message;
}
