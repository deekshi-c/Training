let user = {
  name: 'John',
  age: 30
};
function count(a){
  return  Object.keys(user).length;
 
}

alert( count(user) ); 