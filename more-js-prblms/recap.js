function largestElement(num) {
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > max) {
            max = element;
        }
    }
}
function smallestElement(num) {
    let min = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element < min) {
            min = element;
        }
    }
}