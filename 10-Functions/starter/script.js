'use strict';
// const bookings = [];

// const createBooking = function (
//   fightNum,
//   numPassagers = 1,
//   price = 199 * numPassagers
// ) {
//   const booking = {
//     fightNum,
//     numPassagers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const gera = {
//   name: 'Gerardo Alcantara',
//   pasport: 245451545,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.pasport === 245451545) {
//     console.log('check in');
//   } else {
//     console.log('Wrong passport');
//   }
// };
// // checkIn(flight, gera);
// // console.log(flight);
// // console.log(gera);

// const newPasport = function (person) {
//   person.pasport = Math.trunc(Math.random() * 100000);
// };

// newPasport(gera);
// checkIn(flight, gera);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original strin: ${fn(str)}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transform by : ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('gerardo');
// console.log(greet('Hello'));
// greet('Hello')('Gerard');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book function() {}
  book(flightNum, personName) {
    console.log(
      `${personName} booked a seat ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: personName,
    });
  },
};

lufthansa.book(239, 'Gerardo Alcantara');
lufthansa.book(635, 'Juan Perez');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call Method
// book(23, 'Sarah Williams');
//         👇 where the this key word point
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Maria Sanchez');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Maria Gonzalez');

// Apply method

const flightData = [583, 'Jorge Corral'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

// Bind method

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Pepe pedro');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gera Alcantara');
bookEW23('Josefina Martinez');
console.log(lufthansa);
console.log(swiss);
console.log(eurowings);

// whit event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addtax = (rate, value) => value + value * rate;
// console.log(addtax(0.1, 200));

// const addVAT = addtax.bind(null, 0.23);

// console.log(addVAT(23));

// const greet = greeting => name => console.log(`${greeting} ${name}`);

const addTaxRate = rate => value => console.log(value + value * rate);
const addVAT = addTaxRate(0.23);
addVAT(23);
addVAT(100);
