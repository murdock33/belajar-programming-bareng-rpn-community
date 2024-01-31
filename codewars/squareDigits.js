// Square Every Digit - Kyu 7

function squareDigits(num) {
  let numStringSplit = num.toString().split("");
  let result = "";

  for (let i = 0; i < numStringSplit.length; i++) {
    result += Number(numStringSplit[i] ** 2);
  }
  return Number(result);
}

console.log(squareDigits(3232));