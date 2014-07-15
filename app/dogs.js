/* jshint -W069 */
/* global prompt:true */
'use strict';
var prompt = require('sync-prompt').prompt;

//creating an object manually 
//

var dogs = [];

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};
var d3 = {};
d3['name'] = 'lassie';
d3['age'] = 4;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1,d2,d3,d4,d5);
console.log('Dogs', dogs);

// is d1 a Dog?
console.log(d1 instanceof Dog);
// is d1 an Object 
console.log(d1 instanceof Object);

// creating objects using a constructor
// 

function Dog(name, age){
  this.name = name;
  this.age = age;
}

var d6 = new Dog('fluffy', 2);

console.log (d6);
// is d6 a Dog?
console.log(d6 instanceof Dog);
// is d6 an Object 
console.log(d6 instanceof Object);

var input = prompt('Enter the name of a dog or (q)uit: ');

while(input !== 'q'){
  var dogAge = prompt('Enter the age of the dog: ');
  var newDog = new Dog(input, dogAge);
  dogs.push(newDog);
  input = prompt('Enter the name of a dog or (q)uit: ');
}

console.log(dogs);
