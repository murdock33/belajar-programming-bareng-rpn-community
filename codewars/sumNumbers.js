// Beginner Series #3 Sum of Numbers - Kyu 7

function getSum(a, b) {
  //Good luck!
  let container = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      container += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      container += i;
    }
  } else {
    return a;
  }
  return container;
}

console.log(getSum(5, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
