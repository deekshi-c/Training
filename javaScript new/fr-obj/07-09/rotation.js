function strintoArray(str,length){
    let d=[];
    for(i=0;i < length ;i++ ){
        d[i]=str[i];
    }
    return d;
}

//function checkRotaton(arr1,arr2){
//    
//       arr1
//
//}
//let a= prompt("Enter the String");
let a= "acbd";
let a2="jwdf";

len=a.length; 
let arr=[]
     a=a.toLowerCase();
     arr=strintoArray(a,len)
    arr=arr.sort();
    //let flag=0;
    //for(i=0;i < len ;i++ ){
    //   index=arr.indexOf(arr[i]);
    //   if(index==0)
    //   {
    //    if(arr)
    //   }
    //   if(index== len -1)
    //   else
    //}
    //
    console.log(arr);
    console.log(arr.indexOf('a'));
