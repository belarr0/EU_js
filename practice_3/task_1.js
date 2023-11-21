function sumToLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToLoop(5)); 
console.log("--"); 

function sumToRecursion(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumToRecursion(n - 1);
    }
}

console.log(sumToRecursion(4)); 
console.log("--"); 

function sumToFormula(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumToFormula(3));
