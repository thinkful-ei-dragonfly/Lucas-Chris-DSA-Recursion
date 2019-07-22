function countingSheep(sheep) {
    if (sheep === 0) {
        console.log('All sheep jumped over the fence')
        return 
    }

    console.log(sheep + ' Another sheep jumps over the fence')
    let newSheep = sheep - 1;
    countingSheep(newSheep)
}

countingSheep(3)