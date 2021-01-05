'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recives! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Heres is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `
    );
  },
};

/* const ingredients = [
  prompt(`Let's make pasta!, Ingredient 1?`),
  prompt('Ingredient 2 '),
  prompt('Ingredient 3 '),
];

restaurant.orderPasta(...ingredients); */

// objects only in ES2018

const newRestaurant = { founded: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restauranCopy = { ...restaurant };
restauranCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restauranCopy.name);

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
