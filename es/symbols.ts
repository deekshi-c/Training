let s = Symbol(" fgfg ");
console.log(s,toString);

let s1 = Symbol(" fgfg ");
let s2 = Symbol(" fgfg ");

console.log(s1 === s2);


let s3 = Symbol.for(" fgfg ");
let s4 = Symbol.for(" fgfg ");

console.log(s3 == s4);
 