// Who likes it - kyu 6
function likes(names) {
  // TODO
  let result;

  if (names.length === 0) {
    return "no one likes this";
  }

  for (let i = 0; i < names.length; i++) {
    if (i < 1) {
      result = `${names[i]} likes this`;
    } else if (i < 2) {
      result = names[i - 1] + " and " + names[i] + " like this";
    } else if (i < 3) {
      result = `${names[i - 2]}, ${names[i - 1]} and ${names[i]} like this`;
    } else {
      result = `${names[i + 1 - names.length]}, ${
        names[i + 2 - names.length]
      } and ${names.length - 2} others like this`;
    }
  }
  return result;
}

console.log(likes([]));
console.log(likes(["Peter"])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this
