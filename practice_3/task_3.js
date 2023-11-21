function fib(n, num = {}) {
    if (n <= 1) {
        return n;
    }

    if (num[n]) {
        return num[n];
    }

    num[n] = fib(n - 1, num) + fib(n - 2, num);
    return num[n];
}

console.log(fib(7));
console.log(fib(77));
