// let multiply = function (a, b) {
//     return a * b;
// }

// let multiplyBy3 = multiply.bind(this, 3);
// console.log(multiplyBy3(3));


// let multiplyBy6 = multiply.bind(this, 6);
// console.log(multiplyBy6(5));
// let multiplyBy4 = multiply.bind(this, 3, 4);
// console.log(multiplyBy4(6));


let multiply = function (a) {
    return function (b) {
        return a * b;
    }
}

let multiplyBy4 = multiply(4);
console.log(multiplyBy4(9));

