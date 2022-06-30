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

function concatName(array) {
  let concatenate = "";
  concatenate = array[array.length - 1] + ", " + array[0]
  return concatenate;
}
console.log(concatName(["marcelli", "carolini", "lima", "marcelino"]));

// Desafio 5
function footballPoints(wins, ties) {
  let spots = 0;
  spots = (wins * 3) + ties
  return spots;
}
console.log(footballPoints(2, 1));

// Desafio 6

function highestCount(array) {
  let higherNumber = array[0];
  let repetition = 0;
  // primeiro achar o maior numero
  for (let index of array) {
    if (index >= higherNumber) {
      higherNumber = index;
    }
  }
  for (let index of array) {
    if (higherNumber === index) {
      repetition += 1;
    }
  }
  return repetition
}
console.log(highestCount([0, 0, 0]));