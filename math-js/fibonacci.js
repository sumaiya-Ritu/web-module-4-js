


// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function fiboSeries(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fiboSeriesDorkar = fiboSeries(13);
// console.log(fiboSeriesDorkar);

function fiboSeries(num) {
    if (typeof num != 'number') {
        return 'give a number'
    }
    if (num < 2) {
        return 'positive number den';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeriesDorkar = fiboSeries([1]);
console.log(fiboSeriesDorkar);