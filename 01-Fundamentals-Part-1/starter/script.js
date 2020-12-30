/* let js = 'amazing'; */
/* if (js === "amazing") {
  alert("Javascript is FUN !");
} */
/* console.log(40 + 8 + 23 - 10);
console.log(23);
let firsName = 'Gerardo';
console.log(firsName);
let PI = 3.1415;
let miPrimerTrabajo = 'diseñador';
let miTrabajoActual = 'Senior developer';

let JavascriptIsFun = true;
console.log(JavascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'true');

JavascriptIsFun = 'Yes!';
console.log(typeof JavascriptIsFun); */

// Math Oparators
/* const currentyear = 2020;
const ageGera = currentyear - 1979;
const ageMariana = currentyear - 1986;
console.log(ageGera, ageMariana);

console.log(ageGera * 2, ageGera / 10, 2 ** 3); */
// ** 3 significa a la tercera potencia = n *n * n

/* const primerNombre = 'Gerardo';
const apellido = 'Alcantara';

console.log(primerNombre + ' ' + apellido);
console.log(`${primerNombre} ${apellido}`); */

// Assigment operators
/* let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x) */ // comparecen Operators

// >,  <, >=, <=
/* console.log(ageGera > ageMariana);
console.log(ageGera < ageMariana);
console.log(ageGera === ageMariana); */

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95; */

// DATA 2
/* const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI) */

/* const firstName = 'Gerardo';
const job = 'Senior Developer';
const birthYear = 1979;
const year = 2037;

const gera = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(gera);

const geraNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(geraNew); */

/* console.log(`multy
line with out  
need to break `); */

const age = 13;

if (age >= 18) {
  console.log(`Mariana can start her driving licence 🚗`);
} else {
  console.log(`Mariana can not start her driving licence, she need to take the 🚌`);
}

const birthYear = 1999;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
