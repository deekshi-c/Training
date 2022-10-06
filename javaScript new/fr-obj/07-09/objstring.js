let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
function a(b,c){
    return b-c;
}
let hi = ["1ABSENT","DEFUSSE","45GHIOO","JKLM"];
//console.log(users.filter(i => i.id > 2));
let bi= "djkc dfd f  dfkd sdhf khf";
let arr2=bi.split('  ');
let j= hi.join(' ');
console.log(hi.map(i => i.slice(1,3)));
console.log(hi.sort(a));
console.log(hi.reverse());
console.log(j);
console.log(hi.reduce((s,c)=> s+c));