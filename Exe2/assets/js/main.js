/* Variabili */

/* Array */
let listNomeSqd = [];
let listaNumbersEstratti = [];
/* Oggetti */

let squadre =[
{ 
    
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
{ 
    'Nome': '',
    'N_gioc':11,
    'Punti': 0,
    'Falli_Su': 0,
    'Number':0,  
},
]
/* Funzioni */
//Da un nome, scelto dall'utente, alle varie squadre di calcio
function giveItaName(){
    for (i= 0, j=1; i < 12; i++, j++){
        squadre[i].Nome = prompt(`Inserisci il nome della ${j}° squadra`);
    }return squadre;
}

//Alle squadre di calcio assegna un numero random per i falli subiti e i punti fatti
function giveItaValueForFaSU(){
    for (m= 0; m < 12; m++){
        squadre[m].Punti = Math.floor(Math.random()*10);
        squadre[m].Falli_Su = Math.floor(Math.random()*10);
    }return squadre;
}

//Mostra in console i nomi delle squadre, i falli subiti e i punteggi
function showValueFaSuNamePoints(){
    for (n= 0; n < 12; n++){
        let {Nome: w, N_gioc: x, Punti: y, Falli_Su: z} = squadre[n];
        console.log({Nome: w, Falli_Su: z});
    }
}

/* Eventi */
giveItaName()
giveItaValueForFaSU()
showValueFaSuNamePoints()


/* Parti non usate */
//console.log(squadre);
//console.log(listaNumbersEstratti);



/* Funzioni non usate:
//Da un numero random alle varie squadre di calcio
function randomNumber4Position(){
    for (k= 0; k < 12; k++){
        var playNumber = Math.floor(Math.random()*12);
        if ((listaNumbersEstratti.includes(playNumber)) === true){
            playNumber = Math.floor(Math.random()*99);
            playNumberReload = playNumber/2;
            squadre[k].Number = playNumberReload;
            listaNumbersEstratti.push(playNumberReload);
        }
        else{
            squadre[k].Number = playNumber;
            listaNumbersEstratti.push(playNumber);
        }
        
    }return listaNumbersEstratti, squadre;
}


//Ordina per numero random decrescente le squadre presenti nell'Array
//mostrando i punti fatti e i falli subiti
function disposizioneNumberSquadOrder(){
squadreOrder = squadre.sort();
return squadreOrder;
}
*/