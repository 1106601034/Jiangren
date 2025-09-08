"use strict";
function Sum(a, b) {
    return a + b;
}
console.log(Sum(1, 2));
function Greeting(props) {
    console.log(`Hi ${props.name}!`);
}
let Person = { name: "eve", age: 6 };
Greeting(Person);
