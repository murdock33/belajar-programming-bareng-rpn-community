/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [
  { penumpang: 'Dimitri', 
  naikDari: 'B', 
  tujuan: 'F', bayar: 
  8000 }
]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  let result = [];

  if (arrPenumpang.length === 0) {
    return arrPenumpang;
  }

  for (let x in arrPenumpang) {
    let obj = {
      penumpang: arrPenumpang[x][0],
      naikDari: arrPenumpang[x][1],
      tujuan: arrPenumpang[x][2],
      bayar: 0,
    };
    for(let i = 0; i < rute.length; i++) {
      if (obj.naikDari < rute[i]) {
        obj.bayar += 2000
        if (rute[i] === obj.tujuan) {
          break;
        }
      }
    }
    result.push(obj);
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dmitri", "B", "F"],
    ["Icha", "A", "B"]
  ])
);
// [ 
//   { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 },
// ]

console.log(naikAngkot([])); //[]
