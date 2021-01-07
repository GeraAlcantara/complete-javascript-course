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

/* const lufthansa = {
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
}; */

/* lufthansa.book(239, 'Gerardo Alcantara');
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
book.call(swiss, ...flightData); */

// Bind method

// const bookEW = book.bind(eurowings);
// const bookLX = book.bind(swiss);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Pepe pedro');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Gera Alcantara');
// bookEW23('Josefina Martinez');
// console.log(lufthansa);
// console.log(swiss);
// console.log(eurowings);

// whit event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addtax = (rate, value) => value + value * rate;
// console.log(addtax(0.1, 200));

// const addVAT = addtax.bind(null, 0.23);

// console.log(addVAT(23));

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const addTaxRate = rate => value => console.log(value + value * rate);
// const addVAT = addTaxRate(0.23);
// addVAT(23);
// addVAT(100);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
 */

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(input) {
    const answer = prompt(
      `${this.question}\n ${this.options.join('\n')} \n(Write option number)`
    );
    if (Number(answer) < this.answers.length) {
      this.answers[answer]++;
    } else alert('You must select 0, 1, 2 or 3 as an answer');
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    }
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); */

// Imeditle invoque function
/* (function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
(() => console.log('This will never run again'))();

{
  // const isPrivate = 23;
  var isPrivate = 23;
}
console.log(isPrivate); */

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
console.dir(booker); */

/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
h();
f();
console.dir(f); */

// Example Closure

/* const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3); */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
