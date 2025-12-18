const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

//! Colori per formattazione risultati

//todo -> Colore Arancio per le stampe di array
//  Violetto per i booleani


console.log("Soluzione Esercizi: \n \n ")
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.log("Esercizio 1")
console.log(reversedTeachers);
console.log("%c" + reversedTeachers.join(", "), "background-color: orange; color: black; padding: 2px;");

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = [];

//! Usando python language
//* for teacher in teachers:
//*   if teacher.lenght >= 5:
//*        longNames.append(teacher)

//! Convertito in Javascript
//* for (let teacher of teachers) {
//*   if (teacher.length >= 5) {
//*     longNames.push(teacher);
//*       }
//*     }


for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log("Esercizio 2 \n ")
console.log(longNames);
console.log("%c" + longNames.join(", "), "background-color: orange; color: black; padding: 2px;");

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
console.log(teachers);
console.log("%c" + teachers.join(", "), "background-color: orange; color: black; padding: 2px;");
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
  }
}
console.log(isFabioPresent);
console.log("%c" + isFabioPresent, "background-color: rgba(218, 34, 238, 1) ; color: black; padding: 2px;");

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";
for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i] + ", ";
}
console.log(teachersString);
console.log("%c" + teachersString.trim().slice(0, -1), "background-color: orange; color: black; padding: 2px;");
