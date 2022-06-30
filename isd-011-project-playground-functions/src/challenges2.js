// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return "Vazio!"
  }
  let list = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    let object = {
      tech: array[i],
      name: name
    }
    list.push(object)
  }
  return list;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Marcelli"));

// Desafio 11
function threeSameNumbers(array) {
  let conferindo = array;
  let contador = 0;
  for (let index of array) {
    for (let confIndex of conferindo) {
      if (index === confIndex) {
        contador += 1;
      }
      if (contador >= 3) {
        return contador;
      }
    }
    contador = 0;
  }
  return contador;
}

function generatePhoneNumber(array) {
 
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of array) {
    if (index < 0 || index > 9 || threeSameNumbers(array) === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let telefone = '(xx) xxxxx-xxxx';
  let telFinal = '';
  for (let telIndex in telefone) {
    for (let arIndex of array) {
      if (telefone[telIndex] === 'x') {
        telFinal += arIndex;
        array.shift();
        break;
      } else {
        telFinal += telefone[telIndex];
        break;
      }
    }
  }
  return telFinal;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resul = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)
    && lineB < lineC + lineA && lineB > Math.abs(lineA - lineC)
    && lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) {
    resul = true;
  }
  return resul;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
