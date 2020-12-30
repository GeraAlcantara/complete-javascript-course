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

/* const age = 13;

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

console.log(century); */

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
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})! `);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})! `);
} */

// Type conversion
/* const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(Number('jonas'));
console.log(String(23));

//Type coercion
console.log("I'm " + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18'); */

// falsy values 0, '', undefined, null, NaN
/* let n = 0;
if (n) {
  console.log(true);
} else {
  console.log(false);
} */

/* const age = 18;

if (age === 18) {
  console.debug(' You just become an adult');
} */

/* const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasGoodVision && hasGoodVision) {
  console.log(` sara is able to drive`);
} else {
  console.log(` someone else should drive`);
} */
/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */

/* const scoreDolphines = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphines >= 100 || scoreKoalas >= 100) {
  if (scoreDolphines === scoreKoalas) {
    console.log('Es un empate');
  } else if (scoreDolphines > scoreKoalas) {
    console.log('Dolphines wins');
  } else {
    console.log('Koalas wins!');
  }
} else {
  console.log('no team score more than 100');
} */

// switch statment
/* const day = 'frida';

switch (day) {
  case 'monday':
    console.log(`Plan course
Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`enjoy the weekend 😁`);
    break;

  default:
    console.log(`No valid day!`);
    break;
}
if (day === 'monday') {
  console.log(`Plan course
  Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`enjoy the weekend 😁`);
} else {
  console.log(`No valid day!`);
} */

/* const age = 12;

age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'} `); */

// The bill was 275, the tip was 41.25, and the total value 316.25

const bill = 275.4;

const tip = bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100;

console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill + bill * tip}`);
