// Descrizione esercizio:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome utente',  nomeUtente); 

let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', cognomeUtente); 

let coloreUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente', coloreUtente); 

let infoUtente = `${nomeUtente}${cognomeUtente}${coloreUtente} 21`;
console.log(infoUtente)

document.getElementById('mio_id').innerHTML = infoUtente;