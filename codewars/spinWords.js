// Stop gninnipS My sdroW! - Kyu 6

function spinWords(string) {
  //TODO Have fun :)
  let strSplit = string.split(" ");
  let container = "";

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length >= 5) {
      container = strSplit[i].split("").reverse().join("");
      strSplit.splice(i, 1, container);
    }
  }
  return strSplit.join(" ");
}

console.log(spinWords("This is another test"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("Just kidding there is still one more"));
