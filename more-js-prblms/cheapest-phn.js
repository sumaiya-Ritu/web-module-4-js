const phones = [
    {
        name: 'samsung s5',
        price: 45000,
        camera: 3,
        Storage: 32
    },
    {
        name: 'xiomi note 5',
        price: 15000,
        camera: 2,
        storage: 8
    },
    {
        name: 'walton M5',
        price: 12000,
        camera: 2,
        storage: 8
    },
    {
        name: 'oppo note 5',
        price: 21000,
        camera: 2,
        storage: 8
    },
    {
        name: 'HTC h81',
        price: 30000,
        camera: 3,
        storage: 20
    },
    {
        name: 'redmi note10',
        price: 20000,
        camera: 2,
        storage: 12
    }
];

let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }

}
console.log(cheapest);