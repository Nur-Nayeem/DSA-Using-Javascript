//// 1. set data structure 

// const set1 = new Set();
// set1.add(10)
// set1.add(2)
// console.log(set1)

const set2 = new Set([23, 45, 2])

set2.add(55)
// console.log(set2.has(3));

// set2.delete(23)
// console.log(set2);
// console.log(set2.size)
// set2.clear()
// console.log(set2);


// for (const item of set2) {
//     console.log(item);

// }



////map data structure 

// const map1 = new Map()

// map1.set('name', 'nayeem')
// map1.set('age', 23)

// console.log(map1);

const map2 = new Map([['name', 'nayeem'], ['age', 23]])

map2.set('isMarried', false)
// console.log(map2.has('name'));
console.log(map2.size);

map2.delete('age')
map2.clear()
for (const [key, value] of map2) {
    console.log(`${key}: ${value}`);

}

console.log(map2);

