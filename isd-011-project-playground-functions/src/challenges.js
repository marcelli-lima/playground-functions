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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat 1"
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return "cat 2"
  }
  return "os gatos trombam e o rato foge"
}
console.log(catAndMouse(3, -14, 5));

// Desafio 8
function fizzBuzz(array) {
  let resposta = []
  for (index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      resposta.push("fizzBuzz")
    }
    else if (index % 3 === 0) {
      resposta.push("fizz")
    } else if (index % 5 === 0) {
      resposta.push("buzz")
    } else {
      resposta.push("bug")
    }
  }
  return resposta
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));