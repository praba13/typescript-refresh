"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hallo, I'm ${this.age}`;
    }
}
const Bill = new Coder('Dave', 'Rock', 42);
console.log(Bill.getAge());
//console.log(Bill.age);
//console.log(Bill.lang);
