function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const blueButton = document.getElementById('make-blue-button');

// just name of the function set krte hbe
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const greenButton = document.getElementById('make-green-button');
// function er nam ebhabe likhle na use korleo hoi. sekhetre annoynomous function bole 
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// handle by using add evnt listenr
const golderButton = document.getElementById('make-goldenrod-button');
golderButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// add event listener 
const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink';
})

// shortcut
document.getElementById('make-lightblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})