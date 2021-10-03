// Union types
// function combine(n1: number | string, n2: number | string) {
//     if (typeof n1 === 'number' && typeof n2 === 'number') {
//         return n1 + n2
//     }
//     return n1.toString() + n2.toString()
// }

// const combineAges = combine(30, 26);
// console.log(combineAges);

// const combineAges1 = combine('30', '26');
// console.log(combineAges1);

// Literal types
// function combine(n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text') {
//     if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
//         return +n1 + +n2
//     }
//     return n1.toString() + n2.toString()
// }

// const combineAges = combine(30, 26, 'as-number');
// console.log(combineAges);

// const combineAges1 = combine('30', '26', 'as-text');
// console.log(combineAges1);

// const combineAges2 = combine('30', '26', 'as-number');
// console.log(combineAges2);

// Type aliases
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(n1: Combinable, n2: Combinable, resultConversion: ConversionDescriptor) {
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        return +n1 + +n2
    }
    return n1.toString() + n2.toString()
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineAges1 = combine('30', '26', 'as-text');
console.log(combineAges1);

const combineAges2 = combine('30', '26', 'as-number');
console.log(combineAges2);