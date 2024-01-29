// Credit Card Mask - Kyu 7
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  let maskedString = "";
  let container = cc.slice(0, cc.length - 4);
  let lastFourDigit = cc.slice(cc.length - 4, cc.length);
  for (let i = 0; i <= container.length; i++) {
    maskedString = "#".repeat(i);
  }
  return maskedString + lastFourDigit;
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
console.log(maskify("xqa"));
