const names = ['abul', 'bablu', 'dablu', 'tutul', 'fabul', 'fakun', 'khejur', 'ebul', 'bablu', 'dablu', 'fabul', 'fakun', 'khejur', 'ebul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }

    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);