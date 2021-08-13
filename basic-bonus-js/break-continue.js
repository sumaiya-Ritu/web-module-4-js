const products = [
    { name: 'samsung phone', price: 12000 },
    { name: 'asus laptop', price: 90000 },
    { name: 'boshundora binding paper', price: 80 },
    { name: 'lg phone', price: 10000 },
    { name: 'xiomi watch', price: 5000 },
    { name: 'dell laptop', price: 80000 },
    { name: 'xiomi phone', price: 15000 }
];
// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}