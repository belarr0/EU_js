function reverseListWithLoop(list) {
    let prev = null;
    let current = list;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const originalList = {
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

const reversedList = reverseListWithLoop(originalList);
console.log(reversedList);
console.log("--------------------------------------------------------------------");


function reverseListWithRecursion(list, prev = null) {
    if (!list) {
        return prev;
    }

    const next = list.next;
    list.next = prev;

    return reverseListWithRecursion(next, list);
}

const orgList = {
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

const reverList = reverseListWithRecursion(originalList);
console.log(reversedList);

