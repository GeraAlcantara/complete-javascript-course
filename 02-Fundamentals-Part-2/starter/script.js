'use strict';

let hasDriverLicense = false;

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
