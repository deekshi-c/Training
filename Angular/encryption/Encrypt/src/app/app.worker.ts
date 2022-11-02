

/// <reference lib="webworker" />
function counting(count: any){
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
  return count;
}
addEventListener('message', (data) => {
  const response = counting(data);
  postMessage(response);
});
