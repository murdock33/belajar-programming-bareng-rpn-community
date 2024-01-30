// List Filtering - Kyu 7

function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArray = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === typeof(1)) {
      newArray.push(l[i]);
    }
  }
  return newArray;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
