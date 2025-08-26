console.log('Q1');
let name = "Alice";
  if (true) {
    const name = "Bob";
    console.log(`The inner name is ${name}`);
  }
console.log(`The outer name is ${name}`);
console.log();

console.log('Q2');
const doAddition = (a,b)=>{return a+b;}
console.log(doAddition(25,21));
console.log();

console.log('Q3');
let greeting = `Hello, ${name}! Welcome to this couese!`;
console.log(greeting);
console.log();

console.log('Q4');
let person = {name: "eve", age: 25, city: "Sydney"};
let {name:personName, age} = person;
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
function doMath (...numbers) {
    return numbers.reduce(sum,0);
}
console.log(doMath(1,2,3,6));

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
