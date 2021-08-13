const num = 1.2356;
// Math.floor
// Math.ceil
// Math.round

const random = math.random();
// specific ranger er modhe chaile
const btw10 = random * 10;
const rounded = Math.round(btw10);
console.log(rounded);
// point charai 10 obdi print korbe 
console.log(btw10);
// 10obdi random nmbr ekek bar print krbe 
console.log(random);
// output dibe different nmbr for each time printed


// loop diyeo kora jai
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 100;
    const selected = Math.round(random);
    // console.log(selected);
}

// random e jate eki nmbr duibarprint na hoi tar jnno
const selected = [];
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 100;
    const selected = Math.round(random);
    const picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    }
    else {
        console.log(selected, picked);
    }
}
console.log(selected);
