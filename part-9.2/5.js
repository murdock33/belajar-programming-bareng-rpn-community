//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let result = '';
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let kataSplit = kata.split("");
  let alphabetSplit = alphabet.split("");

  for (let i = 0; i < kataSplit.length; i++) {
    for (let j = 0; j < alphabetSplit.length; j++) {
      if (kataSplit[i] === alphabetSplit[j]) {
        if(kataSplit[i] === 'z') {
            result += alphabetSplit[0];
        } else {
            result += alphabetSplit[j+1]
        }
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
console.log(ubahHuruf("zebra")); // afcsb
