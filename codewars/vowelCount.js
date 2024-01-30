// Vowel Count = Kyu 7

function getCount(str) {
  strSplit = str.split("");
  let result = 0;

  for (let i = 0; i < strSplit.length; i++) {
    if (
      strSplit[i] === "a" ||
      strSplit[i] === "i" ||
      strSplit[i] === "u" ||
      strSplit[i] === "e" ||
      strSplit[i] === "o"
    ) {
      result++;
    }
  }
  return result;
}

console.log(getCount("abracadabra"));
console.log(getCount("o a kak ushakov lil vo kashu kakao"));
