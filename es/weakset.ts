let mySet1 = new Set([3, 4, 5, 6, 8, 9]);
let key = {};
mySet1.add(key);
console.log(mySet1);
key = null;
console.log(mySet1);

let mySet2 = new WeakSet();
let key1 = {};
mySet2.add(key1);
console.log(mySet2.has(key1));
console.log(mySet2);
key1 = null;
console.log(mySet2.has(key1));

