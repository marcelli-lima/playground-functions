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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
