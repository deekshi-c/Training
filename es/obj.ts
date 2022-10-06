var fname;
var lname;

// let details ={
//     Fname,
//     Lname
// };

function addFullname(fname, lname, age) {
    let fullname = fname + "  " + lname;
    return {
        fname,
        lname,
        fullname,
        // isAdult:() => age > 22;
        // }
        isAdult() {
            return age > 22;
        }
    }
}
let p = addFullname("Ross", "gellen", 33);
console.log(p.fname);
console.log(p.lname);
console.log(p.isAdult());