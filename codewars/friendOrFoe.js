// Friend or Foe? - Kyu 7

function friend(friends) {
  //your code here
  let container = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      container.push(friends[i]);
    }
  }
  return container;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
