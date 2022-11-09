class Coder {
  secoundLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hallo, I'm ${this.age}`;
  }
}

const Bill = new Coder('Dave', 'Rock', 42);

console.log(Bill.getAge());
console.log(Bill);
//console.log(Bill.age);
//console.log(Bill.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}.`;
  }
}

const Gates = new WebDev('Linux', 'Gates', 'Jazz', 44);
console.log(Gates);
console.log(Gates.getLang());
console.log(Gates.name);
//console.log(Gates.age);
//console.log(Gates.lang);
