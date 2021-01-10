'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  //text content to = 0
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
      <div class="movements__value">${mov}€ </div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${account.balance} €`;
};

const clacDisplaySumary = function (account) {
  const incomes = account.movements.some(mov => mov > 0)
    ? account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov)
    : 0;
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements.some(mov => mov < 0)
    ? account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov)
    : 0;
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, interest) => acc + interest);

  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

const user = 'Steven Thomas Williams'; // stw
createUserNames(accounts);
console.log(accounts);

const updateUI = function (account) {
  // display Movements,
  displayMovements(account.movements);
  // display Balance
  calcDisplayBalance(account);
  // display Sumary
  clacDisplaySumary(account);
};

// Event Handler
let currentAcount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    //display UI and Welcome Msg
    labelWelcome.textContent = `Welcome back, ${
      currentAcount.owner.split(' ')[0]
    }`;
    // Clear Input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    // losse Focus
    inputLoginPin.blur();
    containerApp.style.opacity = '1';

    // UpdateUI
    updateUI(currentAcount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  //clear Inputs and focus
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    reciverAcc &&
    currentAcount.balance >= amount &&
    reciverAcc?.userName !== currentAcount.userName
  ) {
    // Add a negative movement to current user
    currentAcount.movements.push(-amount);
    // Addd a posite movement to the reciver
    reciverAcc.movements.push(amount);
    // UpdateUI
    updateUI(currentAcount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcount.movements.some(mov => mov > amount * 0.1)) {
    // Add Movement
    currentAcount.movements.push(amount);
    // UpDate UI
    updateUI(currentAcount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAcount.userName &&
    currentAcount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAcount.userName
    );
    console.log(index);
    accounts.splice(index, 1);
    console.log('close');

    // Hide UI
    containerApp.style.opacity = '0';
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputLoginPin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAcount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2); */

//1.
/* const dataSet1 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter(age => age >= 18);
  console.log(humanAge);
  console.log(adults);

  const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // const avg = adults.reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return avg;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2); */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const account.movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1; */

// PIPELINE
/* const totalDepositinUISD = movements
  .filter(mov => mov > 0)
  // debug to check the operaation with the arr parameter
  .map((mov, _, arr) => {
    console.log(arr);
    return mov * euroToUSD;
  })
  .reduce((acc, cur) => acc + cur);

console.log(totalDepositinUISD); */

// Reduce
// ACCUMULATOR --> CURRENT
/* const totalMovements = movements.reduce((acc, cur) => acc + cur, 0);
console.log(totalMovements);

const maxValueMovements = movements.reduce(
  (acc, mov) => (mov > acc ? mov : acc),
  movements[0]
);
console.log(maxValueMovements);

// filter
const deposit = movements.filter(mov => mov > 0);
console.log(deposit);
const withDrawals = movements.filter(mov => mov < 0);
console.log(withDrawals); */

// MAP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
/* const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);

const movDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You deposited ${
      mov > 0 ? 'deposited' : 'withdres'
    } ${Math.abs(mov)}`
);
console.log(movDescriptions);  */

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* let arr = ['a', 'b', 'c', 'd', 'e']; */

// SLICE
/* console.log(arr.slice(2));
console.log(arr.slice(2, arr.length - 1));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]); */

// SPLICE

// console.log(arr.splice(2));
/* arr.splice(-1);
console.log(arr.splice(1, 2));
console.log(arr); */

// REVERSE
/* const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); */

// FOREACH

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdres ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH ------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
    console.log(arr);
  } else {
    console.log(`Movement ${i + 1}: You withdres ${Math.abs(mov)}`);
  }
}); */

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
});
 */

/// FIND
/* const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const acount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acount); */

/* console.log(movements);
// Equality
console.log(movements.includes(-130));

// Some: Condition
console.log(movements.some(mov => mov > 1500));

// Every all items pass the test
console.log(account4.movements.every(mov => mov > 0));

// Separete callback

const deposits = mov => mov > 0;
console.log(movements.filter(deposits)); */

// Flat Arrays

/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovementsOld = accounts.map(acc => acc.movements);
console.log(accountMovements.flat());
const allMovements = accountMovements.flat(); 

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

// Flat Map
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);
console.log(overallBalance2); */

/* const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners); */

// return < 0, A, B
// return > 0, B, A

// Asending
/* movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
}); */
// movements.sort((a, b) => a - b);
// console.log(movements);

// Desending
/* movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
}); */
// movements.sort((a, b) => b - a);

// console.log(movements);
