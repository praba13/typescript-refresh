"use strict";
let myName = 'PR';
let meaningOfLife;
let isLoading;
let album;
let postId; //union type (is not limited)
let isActive; // 0 or false
let re = /\w+/g;
//Arrays
let stringArr = ['one', 'hey', 'Paul'];
let guitars = ['Starts', 'Les Paul', 5150];
let mixedDate = ['EVH', 1980, true];
//stringArr[0] = 42; //Problem
//stringArr.push(42);
//stringArr.push('Baba');
guitars.unshift('Jim');
let test = [];
let bands = [];
console.log(typeof stringArr);
console.log(stringArr);
console.log(guitars);
//Tuple
let myTuple = ['USA', 13, false];
let mixed = ['Mexico', 1, true];
mixed = myTuple;
//myTuple = mixed; // Fehler
//Objects
let myObject;
myObject = [];
console.log(typeof myObject);
const exampleObj = {
    prop1: 'Peter',
    prop2: true
};
exampleObj.prop1 = 'Hans';
//exampleObj.prop1 = 23; // das geht nicht
console.log(exampleObj);
let evh = {
    name: 'Paul',
    active: false,
    albums: [32, 42, 'Trog']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III']
};
//evh = jp;
//jp = evh;
console.log(jp);
//Object Type as Parameter
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Holla!!';
};
console.log(greetGuitarist(jp));
//ENUMS, start with 0 but we can manully manupulate starting postion
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["B"] = 5] = "B";
})(Grade || (Grade = {}));
console.log(Grade.D);
// do not with interface
//inteface use for classses or objects
//interface PostId = stringOrNumber // not work
// ------------------------
// Literal Types
// ------------------------
let myNameIs;
//myNameIs = 'Gates'; //not wok
let userName;
userName = 'Astro'; // we can choose the userName with help of intellisense
// ------------------------
// FUNCTIONS
// ------------------------
console.log('----------FUNCTIONS---------');
// return number
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hallo!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(10, 5));
console.log('--------OPTIONAL PARAM. FUNCTIONS---------');
// optional Paramter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 5));
console.log('----------REST PARAM. FUNCTIONS-----------');
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
logMsg(total(1, 2));
console.log('----------NEVER TYPE FUNCTIONS-----------');
