// Descending Order = Kyu 7

function descendingOrder(n) {
  let strSplit = n.toString().split("").sort();
  let result = "";

  for (let i = strSplit.length - 1; i >= 0; i--) {
    result += strSplit[i];
  }
  return Number(result);
}

console.log(descendingOrder(111));
console.log(descendingOrder(1123455));
console.log(descendingOrder(0));
