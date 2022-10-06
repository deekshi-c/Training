let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salary){
    let sum=0;
    for( let key of Object.values(salaries)){
        sum+= key;
    }
    return sum;
}


console.log( sumSalaries(salaries) );