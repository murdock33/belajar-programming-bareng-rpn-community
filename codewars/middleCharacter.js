// Get The Middle Character - Kyu 7

function getMiddle(s) {
  //Code goes here!
  let strSplit = s.split("");

  if (strSplit.length % 2 !== 0) {
    return strSplit[Math.floor(strSplit.length / 2)];
  } else {
    const middleOne = strSplit[strSplit.length / 2 - 1];
    const middleTwo = strSplit[strSplit.length / 2];
    return middleOne + middleTwo;
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("tet"));
