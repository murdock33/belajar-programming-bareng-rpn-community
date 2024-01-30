// Number, Number......WAITTT, Letter - Kyu 6

function doMath(string) {
  let container = string.split("").reverse();
  let toString = container.join("").split(" ").sort();
  let regex = toString
    .join(" ")
    .match(/[0-9]+/gi)
    .join("");

  return Number(regex);
}

console.log(doMath("1z 2t 3q 5x 6u 8a 7b"));
