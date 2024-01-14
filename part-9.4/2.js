//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let stringSplit = str.split("")
      for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i] > stringSplit[i + 1]) {
          let a = stringSplit[i]
          let b = stringSplit[i + 1]
          stringSplit[i] = b
          stringSplit[i + 1] = a
        }
      }
      return stringSplit.join("");
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'