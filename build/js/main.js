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
