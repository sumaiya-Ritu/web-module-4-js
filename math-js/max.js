const business = 450;
const minister = 350;
const army = 600;
// if (business > minister) {
//     console.log('hahaha');
// }
// else {
//     console.log('blabla');
// }

// if (business > minister && business > army) {
//     console.log('bssn is boro');
// }
// else if (minister > business && minister > army) {
//     console.log('ami borolok');
// }
// else if (army > business && army > minister) {
//     console.log('ami soktiman');
// }
// else {
//     console.log('sorkar e prodhan');
// }

var max = Math.max(business, minister, army);
console.log('largest is ', max);

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const largest = findLargest(50, 45);
console.log('largest is ', largest);