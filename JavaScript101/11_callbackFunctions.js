function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function calculate(a, b, callbackFunc) {
  const val1 = callbackFunc(a);
  const val2 = callbackFunc(b);
  return val1 + val2;
}

// result of the above code 
const resultsq = calculate(12, 3, square);
console.log(resultsq);
// const resultcu = calculate(12, 3, cube);;
// console.log(resultcu);
