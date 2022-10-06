function range(arr, a, b) {
    console.log ( arr.filter(i => (a <= i && i <= b)));
  }

let arr = [5, 3, 8, 1];
range(arr,2,7);