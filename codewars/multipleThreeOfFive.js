// Multiples of 3 or 5 - Kyu 6

function solution(number) {
  let result = 0;

  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(20));
