// Disemvowel Trolls - Kyu 7

function disemvowel(str) {
  let strSplit = str.split("");
  let toString = "";

  for (let i = 0; i < strSplit.length; i++) {
    if (
      strSplit[i] !== "a" &&
      strSplit[i] !== "i" &&
      strSplit[i] !== "u" &&
      strSplit[i] !== "e" &&
      strSplit[i] !== "o" &&
      strSplit[i] !== "A" &&
      strSplit[i] !== "E" &&
      strSplit[i] !== "U" &&
      strSplit[i] !== "I" &&
      strSplit[i] !== "O" 
    ) {
      toString += strSplit[i];
    }
  }
  return toString;
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
