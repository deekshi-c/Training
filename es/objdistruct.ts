
let details = {
    fname: "Alex",
    lname: "cole",
    gender: "Male"
};

// let{fname,lname,gender} = details;
let { fname: a, lname: b, gender: c } = details;
console.log(a);
console.log(c);