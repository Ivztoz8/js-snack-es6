/* Variabili */
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = parseInt(prompt('Per il forEach: Inserisci per il Δ-min un numero tra 0 e 5'));
const max = parseInt(prompt('Per il forEach: Inserisci per il Δ-max un numero tra 0 e 5'));
let deltaArray = [];

//Metodo con il ciclo forEach
myArray.forEach(
    (element, index) => {
        if (min <= index && max >= index ){
            deltaArray.push(element);
        }
    }    
);
console.log(deltaArray);

// Metodo con il ciclo Filter
const min1 = parseInt(prompt('Per il Filter: Inserisci per il Δ-min un numero tra 0 e 5'));
const max1 = parseInt(prompt('Per il Filter: Inserisci per il Δ-max un numero tra 0 e 5'));

const newdeltaArray = myArray.filter(
    (element, index) => min1 <= index && max1 >= index 
);

console.log(newdeltaArray);