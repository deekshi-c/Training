function dec(b,c){
    if(b<c) return 1
    else if (b == c) return 0;
    else return -1;
}
let arr = [5, 2, 1, -10, 8];
console.log(arr.sort(dec));