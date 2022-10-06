function b(){
    let bb = 10;
    c();
    function c(){
        let cc = 30;
        console.log(cc+"  inner");
        console.log(bb+"     b enviro");
        console.log(aa+"  global wnv");
    }

}

let aa =10
b();