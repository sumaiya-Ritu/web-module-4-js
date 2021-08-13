const num = [44, 23, 34, 54, 5, 78];
let sum = 0;
for (var i = 0; i <= num.length; i++) {
    const element = num[i];

    sum = sum + element;
    // console.log(sum);
}
function arrayTotal(num) {
    let sum = 0;
    for (let i = 0; i >= num.length; i++) {
        const element = num[i];
        sum = sum + element;
        return sum;
    }
}
arrayTotal(34, 34, 35, 60);