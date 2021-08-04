function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}



var myinches = 132;
var feet = inchToFeet(myinches) / 12;
console.log(feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches) / 12;
console.log(feet);

var naniInches = 168;
var feet = inchToFeet(naniInches) / 12;
console.log(feet);

var nanaInches = 189;
var feet = nanaInches / 12;

//  mile to km
function mileToKm(mile) {
    var km = mile * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log(marathon);