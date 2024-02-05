// Shortest Word - Kyu 7

function findShort(s) {
  let stringSplit = s.split(" ");
  let array = [];
  for (let i = 0; i < stringSplit.length; i++) {
    array.push(stringSplit[i].length);
  }
  array.sort(function (a, b) {
    return a - b;
  });
  return array[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
