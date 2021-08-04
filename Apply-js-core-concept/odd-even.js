// const number = 5;
// const remainder = number % 2;
// console.log(remainder == 0);

const num = 145;
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

const myNum = 1641;
const isMyNumEven = isEven(myNum);
// console.log(isMyNumEven);

const hernum = 182;
const isHerNum = isEven(hernum);
console.log(isHerNum);


// odd

function isOdd(num) {
    if (num % 2 == 1) {
        // or num%2!=0
        return true;
    }
    return false;
}

const isMyNumOdd = isOdd(myNum);
console.log(isMyNumOdd);