function printListWithRecursion(list) {
    if (list) {
        console.log(list.value);
        printListWithRecursion(list.next);
    }
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListWithRecursion(list);
