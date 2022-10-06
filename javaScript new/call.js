let student = {
    firstname: "alex",
    lastName: "Fergusan",

}


let printFullName = function (club,country) {
    console.log(this.firstname + " " + this.lastName+" club "+club+" country " +country);
}

let student2 = {
    firstname: "David",
    lastName: "Luis",
}

    printFullName.call(student,"manchester",'England');
    printFullName.apply(student2,["Arsenal","Brazil"]);


let myName = printFullName.bind(student,"City","Spain");
console.log(myName);
myName();