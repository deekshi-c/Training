let map2 = new WeakMap();
let ob1 = {};
map2.set(ob1, "hooo");
console.log(map2.get(ob1));
ob1 = null;
console.log(map2.get(ob1));
//# sourceMappingURL=weakMap.js.map