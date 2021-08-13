const products = [
    { name: 'samsung phone', price: 12000 },
    { name: 'asus laptop', price: 90000 },
    { name: 'boshundora binding paper', price: 8000 },
    { name: 'lg phone', price: 10000 },
    { name: 'apple watch', price: 6000 }
]

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'phone');
console.log(matched);