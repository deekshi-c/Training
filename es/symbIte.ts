/*let str =" jdfkla"; 
let arr =[1,3,5,8];
let num =5;
let obj={name:"harry"};

console.log("For -"+ typeof str[Symbol.iterator]);
console.log("For -"+ typeof arr[Symbol.iterator]);
console.log("For -"+ typeof num[Symbol.iterator]);
console.log("For -"+ typeof obj[Symbol.iterator]);



*/
// ITERATOR FOR OBJ


let iter = [1, 5, 69, 9, 560];


function create(array) {
    let c = 0;
    return {
        next: function () {
            return c < array.length ?
                { value: array[c++], done: false } :
                { value: undefined, done: true };
        }
    }
}
 let m = new create(iter)
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
