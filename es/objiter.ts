let details1 = {
    fname: "Alex",
    lname: "cole",
    gender: "Male"
};


details1[Symbol.iterator]=function(){
    let prop = Object.keys(details1)
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= prop.length){
            isDone = true;
        }
        return{ done: isDone ,value: this[details1[count++]]};
    }
    return {next};
}   


   for(let m of details1){
    console.log(m);
   }

