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
console.log(Bill);
//console.log(Bill.age);
//console.log(Bill.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const Gates = new WebDev('Linux', 'Gates', 'Jazz', 44);
console.log(Gates);
console.log(Gates.getLang());
console.log(Gates.name);
//console.log(Gates.age);
//console.log(Gates.lang);
// INTERFACE
console.log('=============Interface===========');
class Guitarist {
    constructor(namee, instrument) {
        (this.namee = namee), (this.instrument = instrument);
    }
    play(action) {
        return `${this.namee} ${action} the ${this.instrument}`;
    }
}
const Jack = new Guitarist('Adam', 'guitar');
console.log(Jack.play('drums'));
