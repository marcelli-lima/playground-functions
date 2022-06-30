// Desafio 1
function compareTrue(bolean, bolean2) {return bolean && bolean2 ? "true" : "false"}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2)
  return area;
}
console.log(calcArea(10, 50));

function splitSentence(string) {
  let array = string.split(' ')
  return array;
}

console.log(splitSentence("go trybe"));