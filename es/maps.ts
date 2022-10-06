let map = new Map();
map.set("fname", "Harry");
map.set("id", 25);
console.log(map);

console.log(map.get("id"));
console.log(map.has("id"));
map.delete("id");
console.log(map);
map.clear();
console.log(map.has("id"));
console.log(map);


