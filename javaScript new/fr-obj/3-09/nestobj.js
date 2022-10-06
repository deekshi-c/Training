let user ={
    name : "AA",
    size : {
        height : 155,
        weght : 55
    }
};

let copy = structuredClone(user);
//Object.assign(copy,user);
copy.size.weght ="63";
console.log(user);
console.log(copy);
