// Vi lascio il bonus per oggi:
// chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5
// attacchiamo alla password, al posto del 21, il risultato

let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome utente',  nomeUtente); 

let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', cognomeUtente); 

let coloreUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente', coloreUtente); 

let numeroUtente = parseInt(prompt('Inserisci il tuo numero preferito'));
console.log('Numero preferito utente', numeroUtente); 

let piuCinque = numeroUtente + 5;

let infoUtente = `${nomeUtente}${cognomeUtente}${coloreUtente}${piuCinque}`
console.log(infoUtente)

document.getElementById('mio_id').innerHTML = infoUtente