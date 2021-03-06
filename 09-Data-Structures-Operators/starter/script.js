'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recives! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time} `
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Heres is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `
    );
  },
};

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
// console.log('Jonas Schmedtman'.split(' '));

/* const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');
const newName = ['Mr', firstName, lastName.toLocaleUpperCase()].join(' '); */
/* console.log(newName); */

/* const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const passagenger = 'jessica ann smith davids';

capitalizeName2('jessica ann smith davids');
capitalizeName2('jonas schmedtmann'); */

//padding

/* const message = 'Go to gate 23';

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('jonas'.padStart(25, '+').padEnd(30, '+'));
console.log('jonas'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(432323233514));
console.log(maskCreditCard('4262198908890290')); */

// Repete

/* const message2 = 'Bad weather... All Depatures Delay...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)} `);
};

planesInLine(5);
planesInLine(3);
planesInLine(12); */
/* const airline = 'TAP Air Portugal';
const plane = 'A320'; */

/* console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B370'[0]);
console.log(airline.length);
console.log('B370'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); */

/* console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */
/* console.log(airline.toLocaleLowerCase());

// Fix capitalization in Name
const passagenger = 'jOnas';
const passagengerLower = passagenger.toLocaleLowerCase();
const passagengerCorrect =
  passagenger[0].toUpperCase() + passagengerLower.slice(1);

console.log(passagengerCorrect);

const email = 'hello@jonas.io';
const logingemail = ' Hello@Jonas.Io \n '; */

/* const lowerEmail = email.toLocaleLowerCase();
const trimmeEmail = lowerEmail.trim();
console.log(trimmeEmail); */

/* const normalizedEmail = logingemail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail); */

//remplacing
/* const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = ' All passagers come to boarding door 23. Bording door 23';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//boolean

const plane2 = 'AirBus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('AirBus') && plane2.endsWith('neo')) {
  console.log('New family of airbus');
} */

/* //1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(` [${half} HALF] ${min}: ${event} `);
} */

// Data Structure Wich One

/* const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]); */

/* console.log(Object.entries(openingHours)); */
/* const hoursMap = new Map(Object.entries(openingHours)); */
/* console.log(question);
console.log(hoursMap); */

// Question App
/* console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value} `);
  }
} */
/* const answer = Number(prompt('Your answer'));
console.log(question.get(question.get('correct') === answer)); */
/* console.log(...question); */

// /////  Maps Fundamentals

/* const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open 🍕')
  .set(false, 'We are close 👈');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

// key can be DOM Elements
rest.set(document.querySelector('h1'), 'Heading');
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr)); */
// Sets

/* const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risoto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('gera'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risoto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size); */

/* const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}



for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open} `);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'jonas', email: 'hello@jonas.io' };
const users = [];

console.log(users[0]?.name ?? 'user array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty'); */
/* const ingredients = [
  prompt(`Let's make pasta!, Ingredient 1?`),
  prompt('Ingredient 2 '),
  prompt('Ingredient 3 '),
];

restaurant.orderPasta(...ingredients); */

// objects only in ES2018

/* const newRestaurant = { founded: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restauranCopy = { ...restaurant };
restauranCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restauranCopy.name); */

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 'S'];
console.log(letters); */

// iterables: array, strings, maps, sets. Not objects

/* restaurant.orderDelevery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelevery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}); */
// destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// change varibles names from destructuring objects
/* const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; */

/* console.log(restaurantName, hours, tags); */

// destrecturing object with default values

/* const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

// Mutating varibles in object destructuring
/* let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); */

// Nested object

/* const {
  fri: { open: o, close: closss },
} = restaurant.openingHours;
console.log(o, closss); */

/* let [main, , secondary] = restaurant.categories;
console.log(main, secondary); */

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Mutated varibles

/* [main, secondary] = [secondary, main];
console.log(main, secondary); */

/* const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// destructuring with Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Gnarby',
    'Gnarby',
    'Lewandowski',
    'Hummels',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */
//////////////////// chalenge #2

/* BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
} */

/* const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} `);
}
let avgOdds = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avgOdds += odd;
}
avgOdds /= odds.length;
console.log(avgOdds);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]} `;
  console.log(`Odd of ${teamStr} ${odd} `);
} */
/* const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allplayers = [...players1, ...players2];

console.log(allplayers);

const players1final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1final);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playersnames) {
  for (let i = 0; i < playersnames.length; i++) {
    const player = playersnames[i];
    console.log(`${player} `);
  }
  console.log(`the total goal were ${playersnames.length} `);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
console.log(
  `the team more likely to win is ${
    (game.odds.team1 < game.odds.team2 && game.team1) ||
    (game.odds.team2 < game.odds.team1 && game.team2)
  } `
); */
