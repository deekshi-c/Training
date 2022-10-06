let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
function sum(dep){
    if (Array.isArray(dep)){
        return dep.reduce((pre,cu) => pre + cu.salary ,0);
    }
    else {
        total =0;
        for(let item of Object.values(dep)){
        total += sum(item);
        }
     return total;
    }
}
console.log(sum(company));

