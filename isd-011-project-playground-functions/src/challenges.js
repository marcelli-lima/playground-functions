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

// Desafio 9
function encode(string) {
  let codi = "";
  for (let letter of string) {
    if (letter === "a") {
      codi += "1"
    } else if (letter === "e") {
      codi += "2"
    } else if (letter === "i") {
      codi += "3"
    } else if (letter === "o") {
      codi += "4"
    } else if (letter === "u") {
      codi += "5"
    } else {
      codi += letter
    }
  }
  return codi
}
console.log(encode("hi there!"));

function decode(string) {
  let decode = "";
  for (let letter of string) {
    if (letter === "1") {
      decode += "a"
    } else if (letter === "2") {
      decode += "e"
    } else if (letter === "3") {
      decode += "i"
    } else if (letter === "4") {
      decode += "o"
    } else if (letter === "5") {
      decode += "u"
    } else {
      decode += letter
    }
  }
  return decode
}
console.log(decode("h3 th2r2!"));