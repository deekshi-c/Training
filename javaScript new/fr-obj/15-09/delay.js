// function print(){
//     console.log("a \n");
// }

//     setInterval(print,2000);
// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);


//task 1
// function prNum(a,b){
//     c=a
//      setTimeout (function go(){
//         console.log(c);
//         if(c < b) setTimeout(go,1000)
//         c++;
//     },1000);

// }
//  prNum(1,9);


 function prNum(a,b){
    c=a
    function go(){
        console.log(c);
        if(c < b) setTimeout(go,1000)
        c++;
    };
    go();

}
 prNum(1,9);

