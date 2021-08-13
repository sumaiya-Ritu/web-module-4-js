// function fibo(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     return fibo(n - 1) + (n - 2);
// }
// const fiboElement = fibo(6);
// console.log(fiboElement);

function fibo(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fib = fibo(n - 1);
    fib[n] = fib[n - 1] + fib[n - 2];
    return fib;

}
const fiboElement = fibo(6);
console.log(fiboElement);