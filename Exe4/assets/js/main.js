/* Variabili */
const targhe = [];
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

// Usando forEach
students.forEach(
    (el) =>{
      targhe.push(el.name.toUpperCase());
    }
);
console.log(targhe);

  // Usando map
const newTarghe = students.map(
    (el) => el.name.toUpperCase()
);
console.log(newTarghe);

// Array di studenti con voti superiori a 70
const deserving = students.filter(
    (el) => {
        if (el.grades > 70){
            return true
        }
    }
);
console.log(deserving); 

// Array di studenti con voti superiori a 70 e ID superiore 120
const honored = students.filter(
    (el) => {
        if (el.grades > 70 && el.id > 120){
            return true
        }
    }
);
console.log(honored); 