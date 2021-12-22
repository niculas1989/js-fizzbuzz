console.log('JS OK')

/*
Consegna:

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda
- Come faccio a sapere se un numero è divisibile per?
- Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


Analizziamo la consegna:

- partire con lo scrivere su console i numeri da 1 a 100
- porsi il problema di scomporre il punto precedente in due:
    - nei numeri divisibili per 3 stampare Fizz
    - nei numeri divisibili per 5 stampare Buzz
    - nei numeri divisibili sia per uno che per l'altro stampare FizzBuzz
*/
const resultElement = document.getElementById('counting');

const Fizz = '';
const Buzz = '';
let counting = '';
console.log('counting iniziale:', counting);

for (let i = 1; i <= 100; i++) {
    counting += `${i} `;
    console.log(`counting al giro: ${i} `, counting);

    if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz')
    }
}

console.log(`counting a fine giro: `, counting);

resultElement.innerText = counting;