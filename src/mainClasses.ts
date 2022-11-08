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
//console.log(Bill.age);
//console.log(Bill.lang);
