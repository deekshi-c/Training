let limit ={
    start: 1,
    stop : 5,
 [Symbol.iterator]={
    this.current = this.start;
    return this;
 },

 next(){
    if(this.current <= this.stop){
        return t{ done : true, value : this.current++     }
    }
 }
}