///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

//1. what is scope and what is context
//https://towardsdatascience.com/still-confused-in-js-scopes-f7dae62c16ee

//global and local scope
// what is lexical scope

//what is descructoring14

var obj = {name:'', age:13}
let {name, age} = obj;


//Difference for..in and for..of :

//for in  - foreach on all object props, returns the prop names as keys
//for of - for loop throught the values of irratable collection


var arr = [23,2,54,3,4];

for (const num of arr) {
    
}

var object = {name:'fsd'}
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}




///////////////////////////////////////
// Lecture: The this keyword. Execution context










