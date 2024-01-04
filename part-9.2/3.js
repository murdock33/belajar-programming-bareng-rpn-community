function cariMedian(arr) {
  // you can only write your code here!
  arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    const middleOne = arr[arr.length/2-1];
    const middleTwo = arr[arr.length/2];
    const median = (middleOne + middleTwo) / 2
    return median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
