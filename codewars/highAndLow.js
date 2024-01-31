// High and Low - Kyu 7

function highAndLow(numbers) {
  let split = numbers.split(" ");
  let numArray = [];
  for (let i = 0; i < split.length; i++) {
    numArray.push(Number(split[i]));
  }
  numArray.sort(function (a, b) {
    return a - b;
  });

  return numArray[numArray.length - 1] + " " + numArray[0];
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
