'use strict';

/* let hasDriverLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive');

function logger() {
  console.log('My name is Gerardo');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges `;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// funtion declaration

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3); */

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangepieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangepieces} pieces of oranges `;
  return juice;
}

console.log(fruitProcessor(2, 3)); */

/* const calcAge = function (birthyear) {
  return 2021 - birthyear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years `);
    return retirement;
  } else {
    console.log(`${firstName} is retires 🥳`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1997, 'Gerardo'));
console.log(yearsUntilRetirement(1922, 'Chepina'));
 */

const calcAverage = (a, b, c) => a + b + c / 3;

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas || avgKoalas >= 2 * avgDolhins) {
    if (avgDolhins >= avgKoalas) {
      console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas} ) `);
    } else {
      console.log(`Koala win (${avgKoalas} vs ${avgDolhins} ) `);
    }
  } else console.log(`no one wins`);
}
checkWinner(avgDolhins, avgKoalas);
