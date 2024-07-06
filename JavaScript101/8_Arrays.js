//push() method
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
// pushExample([1, 2, 3], 4);

// pop() method
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
// popExample([1, 2, 3]);

// shift() method
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
// shiftExample([1, 2, 3]);

// unshift() method
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
// unshiftExample([1, 2, 3], 0);

// concat() method
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
// concatExample([1, 2, 3], [4, 5, 6]);

const names = ["zoro", "shinchan", "todoroki", "allmight"];
function attach(str) {
  console.log(str + " is a heroName given to a worth people");
}
names.forEach(attach);
