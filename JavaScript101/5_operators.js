let a = 2;
let b = 8;

// operators

//Arthimetic Operator
console.log("a + b =", a + b);
console.log("a - b =", b - a);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a to power b =", a ** b);
console.log("a % b =", a % b);

//uniary operator
console.log("a++ =", a++); //(post-increment)
console.log("a++ =", a); //(post-increment)
console.log("++b =", ++b); //(pre-increment)
// for -- too same

//assignment operator
let c = 45;
c += 1;
console.log(c);
// you can try it for all lol * - / % **

// comparison operator
console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(a === b); //check types as well as value strict version

//logical opertor
let d = 34;
let e = 78;

let cond1 = d < e; //true
let cond2 = d === e; //false
console.log(cond1 && cond2); // false
console.log(cond1 || cond2); // true
console.log(!cond1); // false
