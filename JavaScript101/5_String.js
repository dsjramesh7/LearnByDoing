function getLength(str) {
  console.log(str.length);
}

function index(str, target) {
  //index of
  console.log("original String: ", str);
  console.log("index: ", str.indexOf(target));

  //lastindex
  console.log("original String: ", str);
  console.log("lastIndex: ", str.lastIndexOf(target));
}

function sliceFunc(str, start, end) {
  console.log("original String: ", str);
  console.log("index:", str.slice(start, end));
}

// ownwayofslice
function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

const replace_Trim_Func = (str, target, replacement) => {
  console.log("original string: ", str);
  console.log("modified string: ", str.trim().replace(target, replacement));
};

function split_join_trimfunc(str, onwhatWord, joinwiththisword) {
  console.log("original: ", str);
  console.log(
    "modify: ",
    str.trim(str.split(onwhatWord).join(joinwiththisword))
  );
}

// getLength("yowai Mo !!");
// index("yowai Mo Mo Mo !!", "Mo");
// sliceFunc("gyeomi the strongest hashira",7,20);
// console.log(cutIt("strongest hashira", 10, 17));
replace_Trim_Func("     moon lovely!!      ", "moon", "hinata");
// split_join_trimfunc("hobbies includes:dance,anime,codecrazily,travel",",","__");
