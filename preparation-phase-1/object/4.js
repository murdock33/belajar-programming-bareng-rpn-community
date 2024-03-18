/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  let anotherArray = [];
  let rute = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let array = [];
    let string = "";

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "-") {
        array.push(string);
        string = "";
      } else {
        string += arr[i][j];
      }
    }

    array.push(string);
    anotherArray.push(array);
  }

  for (let i = 0; i < anotherArray.length; i++) {
    obj = {
      name: anotherArray[i][0],
      departureCity: anotherArray[i][1],
      destinationCity: anotherArray[i][2],
      transport: anotherArray[i][3],
      totalCost: 0,
    };

    let departureIndex = -1;
    let destinationIndex = -1;

    for (let j = 0; j < rute.length; j++) {
      if (obj.departureCity === rute[j]) {
        departureIndex = j;
      } else if (obj.destinationCity === rute[j]) {
        destinationIndex = j;
      }

      if (departureIndex !== -1 && destinationIndex !== -1) {
        break;
      }
    }

    if (departureIndex < destinationIndex) {
      for (let j = departureIndex; j < destinationIndex; j++) {
        if (obj.transport === "Pesawat") {
          obj.totalCost += 275000;
        } else if (obj.transport === "Kereta") {
          obj.totalCost += 250000;
        } else if (obj.transport === "Bis") {
          obj.totalCost += 225000;
        }
      }
    } else {
      for (let j = departureIndex; j > destinationIndex; j--) {
        if (obj.transport === "Pesawat") {
          obj.totalCost += 275000;
        } else if (obj.transport === "Kereta") {
          obj.totalCost += 250000;
        } else if (obj.transport === "Bis") {
          obj.totalCost += 225000;
        }
      }
    }
    let discountRate = 1;
    if (emoney === "OVO") {
      discountRate = 0.85;
    } else if (emoney === "Dana") {
      discountRate = 0.9;
    } else if (emoney === "Gopay") {
      discountRate = 0.95;
    }
    obj.totalCost *= discountRate;

    result.push(obj);
  }
  return result;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
/*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
