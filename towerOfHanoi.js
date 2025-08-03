let count = 0;
const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
    if (n === 1) {
        count++;
        console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return;
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    count++
    console.log(`move disk ${n} from ${fromRod} to ${toRod}`)

    towerOfHanoi(n - 1, usingRod, toRod, fromRod)

}

towerOfHanoi(4, 'A', 'B', 'C')
console.log(count);
