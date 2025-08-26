console.log('Q1');
let name = "Alice"; // with let type, variable name is able to reassign, also be prevented from unexpected overwrite.
  if (true) {
    const name = "Bob"; // with const type, variable name inside the if block will not effects the outer name.
    console.log(`The inner name is ${name}`);
  }
console.log(`The outer name is ${name}`);
console.log();

console.log('Q2');
const doAddition = (a,b)=>{return a+b;} // Arrow function inherite context of this keyword from parent scope.
console.log(doAddition(25,21)); // context of this in normal function is defined by how this function is called.
console.log();

console.log('Q3');
let greeting = `Hello, ${name}! Welcome to this couese!`;
console.log(greeting);
console.log();

console.log('Q4');
let person = {name: "eve", age: 25, city: "Sydney"};
let {name:personName, age} = person; // there is another let type name variable exist in the same scope. rename the newest name variable to avoid error.
const getParams = ({name,age})=>{return `Name: ${name}, Age: ${age}`;}
console.log(getParams(person))
console.log();

console.log('Q5');
const calculateArea = (width=4,height=5) => {return width*height}
console.log(calculateArea());
console.log();

console.log('Q6');
function sum(a,b) {
    return a + b;
}
const doMath = (...numbers) => { return numbers.reduce(sum,0); }
console.log(doMath(1,2,3,6));

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
