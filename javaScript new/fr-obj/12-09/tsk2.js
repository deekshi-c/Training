function aclean(arr) {
    let map =  new Map();
    for (let key of arr ){
        let sor = key.toLowerCase().split('').sort().join('');
        map.set(sor , key);
     }
     return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );