'use strict';

/* const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    const self = this;
    console.log(2037 - this.year);
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName} `);
  },
};

jonas.greet();
jonas.calcAge(); */

const jesica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJesica = Object.assign({}, jesica);
marriedJesica.lastName = 'davis';
console.log(jesica, marriedJesica);
