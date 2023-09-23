'use strict';

let pow = 1;
function powNum(x, n){
    for (let i = 0; i < n; i++){
        pow = pow * x;
        console.log('1')
    }
    return pow;
}

console.log(powNum(2, 3))