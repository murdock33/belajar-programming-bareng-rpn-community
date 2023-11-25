function pasanganTerbesar(num) {
    // you can only write your code here!
    let numString = num.toString();
    let pasanganTerbesar = -1;
    let numContainer;
    let newNumber;

    for(let i = 0; i < numString.length-1; i++) {
      numContainer = `${numString[i]}${numString[i+1]}`
      newNumber = Number(numContainer)
      if(newNumber > pasanganTerbesar) {
        pasanganTerbesar = newNumber
      }
    }
    return pasanganTerbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99