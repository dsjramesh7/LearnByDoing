let a = 12;
let color = "dark";

//if statement
if (a === 12) {
  console.log(`a is ${a} and satisfy the condition`);
}

//if else statement
if (a > 13) {
  console.log(`a is ${a} and satisfy the if condition in ifelse`);
} else {
  console.log(`a is ${a} and satisfy the else condition in ifelse`);
}

//odd or even
if (a % 2 === 0) {
  console.log(`${a} is even`);
} else {
  console.log(`${a} is odd`);
}

//if else-if else statement
if (color === "red") {
  console.log("color set to red mode");
} else if (color === "dark") {
  console.log("color set to dark mode");
} else {
  console.log("color set to white mode");
}

//ternary operator
console.log(a > 15 ? "a is greater then 10" : "a is less then 10");
