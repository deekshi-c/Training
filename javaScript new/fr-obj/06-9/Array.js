/*QUESTION 2
let styles =["Jazz","Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor((styles.length)/2)]="Classic";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap","Raggae");*/


/* Q3
function sumInput(b)
{
    let sum=0;
    for(i in b)
        sum += b[i];
    return sum;
}

let a=[];
while(true){
    b=+prompt("Enter the number");
    
    if(b==""|| b==null||isNaN(b)) break;
    a.push(b);
}

alert(sumInput(a));
*/


/* Max Sum */
function inputArray(a){
    b=+prompt("Enter the value",0);
    a.push(b);
}

function Maxsum(a,b){
    Max=0;
    for(i=0;i< b;i++){
    sum=0;
    for(j=i;j < b ;j++){
        sum+=a[j];
        Max=Math.max(Max,sum);
        } 
    }
    return Max;
}
array=[];
length=+prompt("enter the array length");
for(let i =0; i < length ; i++)
    inputArray(array);
console.log(array);
alert(Maxsum(array,length));
