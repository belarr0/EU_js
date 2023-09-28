'use strict';

const powNum = (x, n) => {
    let pow = 1;
    for (let i = 0; i < n; i++){
        pow *= x;
    }
    return pow;
}

console.log(powNum(2, 3))
