// let n = new Date(2012, 1, 20,3,12);

// // n=Date.parse("2012-01-20T03:12:00.00");
// // a = new Date(n) ;
// let d1 = new Date("2012-02-20T03:12");
// // alert( d1 );
// console.log(d1);
// // n.setMonth(2,5);
// // console.log(Date.now());
/*--------------------------------------------------------*/
function getM(y,m) {
    let date1 = new Date(y,m+1,0);
    console.log(date1.getDate());
}
let date = new Date();
getM(2012,1);
