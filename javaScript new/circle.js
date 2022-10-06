/*const radius=[3,4,6,7];

const arr = function(a){
    return Math.floor(2*Math.PI*a*a);
}

Array.prototype.calculate = function(logic){
    const result=[];
    for(let i=0 ; i< this.length;i++){
        result.push(logic(this[i]));
    }
    return result;
} 

console.log(radius.calculate(arr));
*/

const output = arr.reduce(function (acc, curr) {
    if (acc < curr) acc = cur;
}, 0)
