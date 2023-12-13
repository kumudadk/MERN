let myName = "Kumu";
let myAge = 21;
console.log(myAge, myName);

var car = "lambo";
var car = "ferrari";

let train = "express";
//redeclaration not available

train = "another express"; // this ll work assignment

const age = 21;
//redeclarartion n assigning again not available
let person = {
  name: "kumu",
}; // object

let colors = ["Red", "green", "blue"]; //array

console.log(colors[2]);

let greetings = function () {
  return "hello world";
};

function greetings1() {
  return "hello ";
}

let a = 10;
let b = "10";

console.log(a1 === b1);
//type and matchees value
function addition(a, b) {
  let c = a + b;
  return c;
}
let course = "javascript";

function printCourse() {
  let a = 10;
  console.log(a); // prints 10
}
console.log(a); // error because a is local variable

function greet() {
  var result = 10;

  if (true) {
    let greeting = "GOOD MORNING";
    console.log("greet", greeting);
  }
  console.log("greet", greeting);
}
//let has block scope and var has fucntional scope
//meaning var is accessibkle anywhere inside the function but let is specfied to global and local
var n = 4;
function mul(op) {
  var res = op * op;
  return res;
}

var ans1 = mul(n);
var ans2 = mul(4);

let fruits = ["apple", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

let personList = [
  { name: "kumu", age: 23, email: "kumuda@gmail.com" },
  { name: "kanaka", age: 23, email: "kumuda@gmail.com" },
];

function getPersonAboveAge(array, age) {
  return array.filter((person) => person.age > age);
}

const result = getPersonAboveAge(personList, 23);
console.log(result);
