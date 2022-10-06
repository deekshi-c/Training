const { abort } = require("process");

function Calculator(){

    this.method ={
        "+":(a, b) => a+b,
        "-":(a, b) => a-b
    };

    this.calculate=function(str){
        let str1=str.split(' ');
        a= +str1[0];
        op= str1[1];
        b= +str1[2];
    if(isNaN(a)|| isNaN(b)||!this.method[op])  {
        return NaN;
    }
        return this.method[op](a,b);
    };

    this.addMethod = function(n,func){
        this.method[n]=func;
    };
}
let cal = new Calculator;
console.log(cal.calculate("8 + 1"));