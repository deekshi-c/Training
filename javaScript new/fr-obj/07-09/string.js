let array =["a","b","c","d","e"];
console.log(array.slice(1,3));
//console.log(Array.splice(1,0.,"b"));

brr=["f","g","h"];
array=array.concat(brr);
brr=brr.concat(array);
console.log(array);
console.log(brr);
/*array.forEach((item,index,array)=> {
          array[index]+="abc";
});*/
//array.forEach(alert);
console.log(array.find(4));