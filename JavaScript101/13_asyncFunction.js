function findSum() {
  let ans = 0;
  for (let i = 0; i < 5; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(5));
}

setTimeout(findSum, 5000);
console.log("hello world");
