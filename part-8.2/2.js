let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling() {
    input[1] += "Elsharawy"
    input[2] = "Provinsi Bandar Lampung"
    input.splice(4, 1, "Pria", "SMA International Metro")
    console.log(input)

    let bulan = input[3];
    let outputBulan = bulan.split('/')

    if(outputBulan[1] === "05") {
        console.log("Mei")
    }

    let outputTiga = [outputBulan[2], outputBulan[0], outputBulan[1]]
    console.log(outputTiga)

    let outputEmpat = outputBulan.join('-')
    console.log(outputEmpat)

    let outputLima = input[1].slice(0,15)
    console.log(outputLima)
}

dataHandling()

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */