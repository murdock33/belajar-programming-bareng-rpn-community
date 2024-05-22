/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  let sentencesContainer = "";

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] === " " || !isNaN(sentences[i])) {
      continue;
    }
    sentencesContainer += sentences[i];
  }

  // rekursif
  if (sentencesContainer.length === 0) {
    return 0;
  } else {
    let toLowerCase = sentencesContainer.toLowerCase();
    let container = toLowerCase.charAt(0);

    if (
      container !== "a" &&
      container !== "i" &&
      container !== "u" &&
      container !== "e" &&
      container !== "o"
    ) {
      return 1 + consonantCounterRecursive(sentencesContainer.substring(1));
    } else {
      return consonantCounterRecursive(sentencesContainer.substring(1));
    }
  }
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); // 10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
