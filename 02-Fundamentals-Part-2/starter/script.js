'use strict' /* console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steve'));
console.log(friends.includes('Steve')); */; // remove las element

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

/* const calcAverage = (a, b, c) => a + b + c / 3;

const scoreDolhins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas || avgKoalas >= 2 * avgDolhins) {
    if (avgDolhins >= avgKoalas) {
      console.log(`Dolphins win 🏆 (${avgDolhins} vs ${avgKoalas} ) `);
    } else {
      console.log(`Koala win  🏆(${avgKoalas} vs ${avgDolhins} ) `);
    }
  } else console.log(`no one wins`);
}
checkWinner(scoreDolhins, scoreKoalas); */

/* const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
friends.push('23');
console.log(friends); */

/* const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);
friends.push('Jay');
console.log(friends);
friends.unshift('John');
console.log(friends); */
/* friends.pop();  */

/* const bills = [125, 555, 44];
const total = [];

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const updateTotal = function (billPlusTip) {
  total.push(billPlusTip);
};

for (let index = 0; index < bills.length; index++) {
  const bill = bills[index];
  updateTotal(calctip(bill));
  console.log(calctip(bill), total);
} */

// Objects

const gera = {
  firstName: 'Gerardo',
  lastName: 'Alcántara',
  age: 2037 - 2012,
  job: 'Senior Developer',
  friends: ['Michael', ' Peter', 'Steven'],
};

console.log(gera);
console.log(gera.lastName);
const nameKey = 'Name';
console.log(gera['first' + nameKey]);
console.log(gera['last' + nameKey]);
/* const interesteIn = prompt('what you what to now');
console.log(gera[interesteInjob]); */

console.log(` ${gera.firstName} has ${gera.friends.length} and his best friend is ${gera.friends[0]} `);
