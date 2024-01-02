/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

  let result = [];
  let animalContainer = [];

  for (let i = 0; i < animals.length; i++) {
    if (i === 0) {
      animalContainer.push(animals[i]);
      continue;
    } else if (animals[i][0] !== animalContainer[0][0]) {
      result.push(animalContainer);
      animalContainer = [animals[i]];
    } else {
      animalContainer.push(animals[i]);
    }
  }
  result.push(animalContainer);
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
