const isString = (param) => typeof param === 'string' 
console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false
