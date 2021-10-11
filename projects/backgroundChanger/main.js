const clickButton = document.getElementById('click');
const bodyHTML = document.querySelector('body');
const redHTML = document.getElementById('red');
const greenHTML = document.getElementById('green');
const blueHTML = document.getElementById('blue');

function generateColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	bodyHTML.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

	function writeColors() {
		redHTML.innerHTML = red;
		greenHTML.innerHTML = green;
		blueHTML.innerHTML = blue;
	}
	writeColors();
}
generateColor();

clickButton.addEventListener('click', generateColor);
