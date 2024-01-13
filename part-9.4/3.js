//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  const wordSplit = kalimat.split("");
  let container = "";
  let wordContainer = "";
  let result = "";

  for (let i = 0; i < wordSplit.length; i++) {
    container = wordSplit[i];

    if (wordSplit[i] === container) {
      wordContainer = container.toUpperCase();

      if (wordContainer === container) {
        wordContainer = container.toLowerCase();
        result += wordContainer;
      } else {
        result += wordContainer;
      }
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
