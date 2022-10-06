let user={
    name :"Arjun",
    address:{
      personal:{
             city: "Mumbai",
             country: "India",
      },
      official:{
         city: 'patna',
         area: {
             landMark:"Hitech city"
         }
      }
     }
 };
 

 let convert = function(obj,root){
    for(let key in obj){
        if(typeof(obj[key])==="object"){
               convert(obj[key],root+"_"+key);
        }
        else result[root+"_"+key] = obj[key];
    }
    return  result;
 }


 let result={};
 console.log(convert(user,"user"));
