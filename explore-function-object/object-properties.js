var computer = {
    price: 29000,
    storage: '156gb',
    color: 'black',
    processor: 'intel 15'
};
// console.log(computer);
// console.log(computer.price);

// set obj property
computer.price = 22000;
// console.log(computer.price);

computer["price"] = 2300;
// console.log(computer);

var priceProp = "price";
computer[priceProp] = 19000;
console.log(computer);