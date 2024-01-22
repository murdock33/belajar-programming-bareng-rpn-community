/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let result = "";
  let text = ["a","b","i","j","u","v","e","f","o","p","A","B","I","J","U","V","E","F","O","P"];

  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    let hurufVokal = false;
    for (let j = 0; j < text.length; j += 2) {
      if (strSplit[i] === text[j]) {
        hurufVokal = true;
        if(strSplit[i] === strSplit[i].toLowerCase()) {
          result += text[j + 1]
        } else {
          result += text[j + 1].toUpperCase()
        }
      }
    }
    if (!hurufVokal) {
      result += strSplit[i];
    }
  }
  return result;
}

function reverseWord(str) {
  //code di sini
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  //code di sini
  const wordSplit = str.split("");
  let container = "";
  let wordContainer = "";
  let result = "";

  for (let i = 0; i < wordSplit.length; i++) {
    container = wordSplit[i];

    if (wordSplit[i] === container) {
      wordContainer = container.toUpperCase();

      if (wordContainer === container) {
        wordContainer = container.toLowerCase();
        result += wordContainer;
      } else {
        result += wordContainer;
      }
    }
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  let arr = [];
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === " ") {
      continue;
    }
    arr.push(strSplit[i]);
  }
  return arr.join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  let result = changeVocals(name);
  result = reverseWord(result);
  result = setLowerUpperCase(result);
  result = removeSpaces(result);

  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
