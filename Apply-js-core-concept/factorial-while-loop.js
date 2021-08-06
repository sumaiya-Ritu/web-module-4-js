// function getFact(num) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= num) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFact = 6;
// console.log(myFact);

function fact(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * 1;
        i--;
    }
    return factorial;
}
const myFact = fact(6);
console.log(myFact);


// loop reverse
function getFact2(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * 1;
    }
    return factorial;
}