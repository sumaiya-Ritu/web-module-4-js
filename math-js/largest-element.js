function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest)
            largest = element;
    }
    return largest;
}
const ages = [12, 13, 56, 14, 67, 2, 89];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -4, -7, -1])
console.log(oldest2);