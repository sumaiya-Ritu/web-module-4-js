// n != n * (n - 1)!

function fact(n) {
    if (n == 1) {
        return 1;
    }

    return n * fact(n - 1);
}
const myFact = fact(7);
console.log(myFact);