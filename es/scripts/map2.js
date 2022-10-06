let map2 = new Map([["fname", "chandler"], ["lname", "nick"]]);
for (let key of map2.keys()) {
    console.log(key);
}
for (let value of map2.values()) {
    console.log(value);
}
for (let [key, value] of map2.entries()) {
    console.log(`${key} -> ${value}`);
}
//# sourceMappingURL=map2.js.map