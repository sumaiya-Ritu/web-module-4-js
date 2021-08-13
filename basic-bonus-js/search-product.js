const products = [
    { name: 'samsung', price: 12000 },
    { name: 'asus laptop', price: 90000 },
    { name: 'boshundora binding paper', price: 8000 },
    { name: 'lg phone', price: 10000 }
]

function searchProducts(products, searchText) {
    for (const product of products) {
        const name = product.name;
        if (name.indexOf('w') != -1)
            console.log(name);
    }
}
const matched = searchProducts(products, 'phone');
console.log(matched);