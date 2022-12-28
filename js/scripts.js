// chiediamo i secondi
const sec = parseInt(prompt('Scrivi i secondi.'));

console.log('Secondi:', sec);

// generiamo il tempo

//ore
let myHours = Math.floor(sec / 3600);

console.log('Ore:', myHours);

// minuti
let myMin = Math.floor((sec % 3600) / 60);

console.log('Minuti:', myMin);

// secondi 
let mySec = sec % 60;

console.log('Secondi:', mySec);


