console.log('Q1');
let name = "Alice";
  if (true) {
    const name = "Bob";
    console.log(`The inner name is ${name}`);
  }
console.log(`The outer name is ${name}`);
console.log();

console.log('Q2');
const DoAddition = (a,b)=>{return a+b;}
console.log(DoAddition(25,21));
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

console.log();

console.log('Q6');

console.log();
