/*function *generator(){
 yield 1;
 console.log("Yield two begins");
 yield 2;
 console.log("Yield over");
}


let myGen = generator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());*/
let person = {
    fname: "Alex",
    lname: "cole",
    gender: "Male"
};
person[Symbol.iterator] = function* () {
    let prop = Object.keys(person);
    for (let t of prop) {
        yield this[t];
    }
};
for (let p of person) {
    console.log(p);
}
//# sourceMappingURL=generator.js.map