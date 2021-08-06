// let factorial = 1;
// for (let i = 0; i <= 5; i++) {
//     factorial = factorial * i;

// }
// console.log(factorial);

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;

    }
    return fact;
}

var firstFact = factorial(9);
console.log(firstFact);

var scndFact = factorial(5);
console.log(scndFact);