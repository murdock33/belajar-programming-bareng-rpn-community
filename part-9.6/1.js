function changeMe(arr) {
  // you can only write your code here!
  let container = []

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      container.push(arr[i][j])
    }
  }

  if(arr.length === 0) {
    console.log("");
  } else {
    const obj1 = {
      firstName: container[0],
      lastName: container[1],
      gender: container[2],
      age: 2024 - container[3]
    }
  
    const obj2 = {
      firstName: container[4],
      lastName: container[5],
      gender: container[6],
      age: 'Invalid birthyear'
    }
  
    console.log(obj1.firstName + " " + obj1.lastName + ":")
    console.log(obj1);
    console.log(obj2.firstName + " " + obj2.lastName + ":");
    console.log(obj2);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""