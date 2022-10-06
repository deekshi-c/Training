// function sum(a){
//    return a == 1?  1 :  a + sum(a-1);
// }
// console.log(sum(5));

// function fib(a){
//     return a <= 1?  a : fib(a-1) + fib(a-2);
//  }
//  console.log(fib(7));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
// function printList(l){
//     console.log(l.value);
//     if(l.next)  printList(l.next);
// }
// printList(list);
  
function printList(l){
    
    if(l.next)  printList(l.next);
    console.log(l.value);
}

printList(list);