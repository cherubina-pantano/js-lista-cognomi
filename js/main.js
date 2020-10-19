/*
Lista Cognomi:
Chiedere all'utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

var userSurname = prompt('Inserisci il tuo cognome');

userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);  // metodo per ottenere le prime lettere della stringa in Maiuscolo
// console.log(userSurname);

listaCognomi.push(userSurname);       // <-- Aggiunge nuovo elemento alla lista
// console.log(listaCognomi);

listaCognomi.sort();                     // <-- Ordine alfabetico
// console.log(listaCognomi);

var position = listaCognomi.indexOf(userSurname);      // <-- Posizione dell'item nella lista (indice array)
console.log('indice array: ' + position);

var position = listaCognomi.indexOf(userSurname) + 1;  // <-- Posizione dell'item nella lista (indice "umano")
// console.log('indice umano: ' + position);
document.getElementById('indice-umano').innerHTML = ('Il cognome '  + userSurname + ' inserito si trova al numero ' + position + ' della lista');


var items = '';

for (var i = 0; i < listaCognomi.length; i++) {
    var item = listaCognomi[i];

    items += '<li>' + item + '</li>';
}

document.getElementById('lista-cognomi').innerHTML = items;
