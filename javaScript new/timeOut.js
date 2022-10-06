function x(){
    for(let i=0;i<6;i++){
        let j=i;
        setTimeout(()=>console.log(j),i*1000)
    }  
}

// x();