function duplicateCount(text) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    let word = text[i].toLowerCase();

    if (obj[word] !== undefined) {
      obj[word] += 1;
      if (obj[word] === 2) {
        count++;
      }
    } else {
      obj[word] = 1;
    }
  }
  return count;
}

console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aaBbcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
