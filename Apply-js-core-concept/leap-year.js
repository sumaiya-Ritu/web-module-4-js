// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {

//         return false;
//     }
// }

// const myYear = 2087;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log(isMyYearLeapYear);

// const yourYear = 2090;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log(isYourYearLeapYear);

// correct code

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);