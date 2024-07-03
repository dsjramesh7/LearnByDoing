// const dog = {
//   aName: "snopyDogg",
//   legCount: 4,
//   speaks: "bhow bhow",
// };

// console.log(
//   `${dog["aName"]} has ${dog["legCount"]} legs and talks in ${dog["speaks"]}.`
// );

//class
class Animal {
  constructor(Animalname, AnimalLegs, AnimalTalk) {
    this.Name = Animalname;
    this.LegCount = AnimalLegs;
    this.Speak = AnimalTalk;
  }
  static myType() {
    console.log("this class is of animal only");
  }
  speaks() {
    console.log("hey there " + this.Speak);
  }
}

let dog = new Animal("snoppyDog", 4, "bhow bhow"); //create object
let cat = new Animal("snoppycat", 4, "meow meow");
console.log(`${dog["Name"]} has ${dog["LegCount"]} and speaks ${dog["Speak"]}`);
console.log(`${cat["Name"]} has ${cat["LegCount"]} and speaks ${cat["Speak"]}`);
dog.speaks(); //call function on object

Animal.myType();
