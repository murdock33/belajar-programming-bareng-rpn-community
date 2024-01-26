/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let result = []
    let meleeContainer = []
    let rangedContainer = []
    let stringSplit = str.split(",")

    if(str === "") {
      return []
    }

    for(let i = 0; i < stringSplit.length; i++) {
      if(stringSplit[i].includes("Ranged")) {
        rangedContainer.push(stringSplit[i].slice(0, stringSplit[i].length - 7))
      }
    }

    for(let i = 0; i < stringSplit.length; i++) {
      if(stringSplit[i].includes("Melee")) {
        meleeContainer.push(stringSplit[i].slice(0, stringSplit[i].length - 6))
      }
    }

    result.push(rangedContainer ,meleeContainer)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []