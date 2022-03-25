/* Variabili */
let showBikesContainer = document.getElementById("showBikesContainer");
let pes1 = 8.14;
let pes2 = 9.11;
let pes3 = 8.77;
let pes4 = 8.34;
let pes5 = 8.95;
let pes6 = 8.52;
let pes7 = 9.36;
let pes8 = 8.10;
let pes9 = 7.89;


/* Oggetti */
// Ogni oggetto descrive una bici da corsa 
// con proprietà: Nome e Peso.
let dataBikes = [
    {
        'Nome': 'Bianchi Oltre XR4 Disc',
        'Peso': pes1, 
    }, 
    {
        'Nome': 'BMC Timemachine Road 01',
        'Peso': pes2,
    },
    {
        'Nome': 'Cannondale SystemSix Hi-MOD',
        'Peso': pes3,
    }, 
    {
        'Nome': 'BH G7 Disc',
        'Peso': pes4,
    },
    {
        'Nome': 'Argon 18 Nitrogen Disc',
        'Peso': pes5,
    }, 
    {
        'Nome': ' Canyon Endurace CF SLX Disc',
        'Peso': pes6,
    }, 
    {
        'Nome': 'Cinelli Superstar Disc',
        'Peso': pes7, 
    },
    {
        'Nome': 'Ridley Fenix SL Disc',
        'Peso': pes8,
    },  
    {
        'Nome': 'Trek Domane SLR 7 Disc',
        'Peso': pes9,
    } 
];



/* Funzioni */
function showBikes() {
    // Destrutturazione
for (i = 0; i < 8; i++){
    // console.log(dataBikes[i].Peso);
    if (dataBikes[i].Peso > 8){
        document.getElementById("showBikesContainer").innerHTML =
        `<div class="d-flex row-12 m-5 bg-primary">
            <h2 class="text-warning text-center align-self-center">Bicicletta con peso minore <h2>
          <h3 class="text-center text-dark border m-3 p-2 bg-light">Nome: ${(dataBikes[i].Nome)}</h3>
          <h3 class="text-center text-white border m-3 p-2 bg-secondary">Peso: ${(dataBikes[i].Peso)}</h3>
        </div>`
        }
    }
}
/* Eventi */
showBikes()
console.log(dataBikes);
