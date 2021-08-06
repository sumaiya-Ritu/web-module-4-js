function celciousToFarenheit(celcious) {
    var cTemp = celcious;
    var cToF = cTemp * 9 / 5 + 32;
    var message = cTemp + 'is ' + cToF + ' F.';

    console.log(message);
}

celciousToFarenheit(60);

function farToCel(far) {
    var fTemp = far;
    var fToC = (fTemp - 32) * 5 / 9;
    var message = fTemp + ' is ' + fToC + ' C';
    console.log(message);
}

farToCel(98);