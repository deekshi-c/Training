function camelize (string){ 
    let str = string.split('-');
    console.log(str);
    str = str.map((w,i) => i == 0 ? w : w[0].toUpperCase()+w.slice(1)); 
    console.log(str);
    return(str.join(''));
}






alert(camelize("fghdf-gfef-efhgf"))  ;
