// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// for (var i = 0; i < numbers.length; i++) {
//     var num = numbers[i];
//     console.log(num);
//     if (numbers > 5) {
//         break;
//     }
// }
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (numbers > 7) {
        continue;
    }
    console.log(num);
}

