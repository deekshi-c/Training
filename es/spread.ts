
// let color =function(mess, res,a,b) {
//     console.log(mess);
//     console.log(res);
//     console.log(a);
//     console.log(b);

//     for( let i in res ){
//         console.log(res[i]);
//     }
// }
let color1 = function (mess, ...res) {
    console.log(mess);
    console.log(res);

    for (let i in res) {
        console.log(res[i]);
    }
}
// var   gg;
// console.log(gg);


var message1 = "Selected colors";
let colors = ["red", "green", "yellow"];
color1(message1, ...colors);