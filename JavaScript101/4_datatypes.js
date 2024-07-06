//datatypes: primitive(7)
let str = "kobiBryant"; // string
let num = 45; // number
let und; // undefined
let bool = false; //boolean
let nu = null; //null
let big = BigInt("123"); //BigInt
let sym = Symbol("hello!!!!"); //symbol

console.log(typeof num);

// non-primitive: objects,arrays,function

const student = {
  name: "aryan",
  age: 25,
  isPass: true,
  cgpa: 9.5,
};
console.log(student);
console.log(typeof student);
console.log(student.age);

const arr = [1, 2, 4, 5, 11];
console.log(arr);
console.log(typeof arr);
console.log(arr[3]);
