// Union types
function combine(n1: number | string, n2: number | string) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    }
    return n1.toString() + n2.toString()
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineAges1 = combine('30', '26');
console.log(combineAges1);