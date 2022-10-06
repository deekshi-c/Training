function range(arr,a,b) {
    let c = 0;
    for(i = 0; i < arr.length ;i++) { 
    c = arr[i];
    if ( c <= a ||  c >= b) arr.splice(i,1);
    } 
     return arr;
}

let arr = [5, 3, 8, 1];
arr=range(arr,2,8);
console.log(arr);