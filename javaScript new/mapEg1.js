const users =[
    { firstName:"Alex",lastName:"Fergusan",age :50},
    { firstName:"Roman",lastName:"Luke",age :30},
    { firstName:"elon",lastName:"musk",age :30},
    { firstName:"david",lastName:"louis",age :39},
];

//Fullname

// const output = users.map((x) => x.firstName+" "+x.lastName);
// console.log(output);


// common age
// const output = users.reduce( function(acc,curr){
//     if (acc[curr.age]) acc[curr.age]++;
//     else acc[curr.age] = 1;
//     return acc
// },{})

// console.log(output[1]);


//chaining

// const output = users.filter((x)=> x.age >30);
const output = users.reduce(function(acc,curr){

    if( curr.age > 30 ) acc.push(curr.firstName);
    return acc;
},[])
console.log(output);