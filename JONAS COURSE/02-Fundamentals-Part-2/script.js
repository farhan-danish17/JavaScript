'use strict';

/*

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;



// Functions
function logger() {
  console.log('My name is Farhan');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2025 - birthYeah;
}
const age1 = calcAge1(2005);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2025 - birthYeah;
}
const age2 = calcAge2(2005);

console.log(age1, age2);



// Arrow functions

const calcAge3 = birthYeah => 2025 - birthYeah;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2025 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2005, 'Farhan')); console.log(yearsUntilRetirement(1980, 'Bob'));



// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));



// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2025 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
  }
}

console.log(yearsUntilRetirement(2005, 'Farhan'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/


// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win  (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win  (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// Introduction to Arrays
const friend1 = 'Asif';
const friend2 = 'nikki';
const friend3 = 'Ashu';

const friends = ['Asif', 'nikki', 'Ashu'];
console.log(friends);

const y = new Array(2005, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Farhan';
const Farhan = [firstName, 'Danish', 2025 - 2005, 'programmer', friends];
console.log(Farhan);
console.log(Farhan.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2025 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// Basic Array Operations (Methods)
const friends = ['Asif', 'nikki', 'Ashu'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('nikki'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('nikki'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('nikki')) {
  console.log('You have a friend called nikki');
}
*/


// Coding Challenge #2

/*
nikki is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



// Introduction to Objects
const FarhanArray = [
  'Farhan',
  'Danish',
  2025 - 2005,
  'programmer',
  ['Asif', 'Ashu', 'nikki']
];

const Farhan = {
  firstName: 'Farhan',
  lastName: 'Danish',
  age: 2025 - 2005,
  job: 'programmer',
  friends: ['Asif', 'Ashu', 'nikki']
};



// Dot vs. Bracket Notation
const Farhan = {
  firstName: 'Farhan',
  lastName: 'Danish',
  age: 2025 - 2005,
  job: 'Programmer',
  friends: ['Asif', 'Ashu', 'Nikki']
};
console.log(Farhan);

console.log(Farhan.lastName);
console.log(Farhan['lastName']);

const nameKey = 'Name';
console.log(Farhan['first' + nameKey]);
console.log(Farhan['last' + nameKey]);

// console.log(Farhan.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Farhan? Choose between firstName, lastName, age, job, and friends');

if (Farhan[interestedIn]) {
  console.log(Farhan[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Farhan.location = 'Portugal';
Farhan['twitter'] = '@FarhanDanish';
console.log(Farhan);

// Challenge
// "Farhan has 3 friends, and his best friend is called Asif"
console.log(`${Farhan.firstName} has ${Farhan.friends.length} friends, and his best friend is called ${Farhan.friends[0]}`);



// Object Methods

const Farhan = {
  firstName: 'Farhan',
  lastName: 'Danish',
  birthYeah: 2005,
  job: 'programmer',
  friends: ['Asif', 'Ashu', 'nikki'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2025 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2025 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2025 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${Farhan.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(Farhan.calcAge());

console.log(Farhan.age);
console.log(Farhan.age);
console.log(Farhan.age);

// Challenge
// "Farhan is a 46-year old programmer, and he has a driver's license"
console.log(Farhan.getSummary());
*/


// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}



// Iteration: The for Loop

// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');
// console.log('Lifting weights repetition 6 ');
// console.log('Lifting weights repetition 7 ');
// console.log('Lifting weights repetition 8 ');
// console.log('Lifting weights repetition 9 ');
// console.log('Lifting weights repetition 10 ');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}



// Looping Arrays, Breaking and Continuing
const Farhan = [
  'Farhan',
  'Danish',
  2025 - 2005,
  'programmer',
  ['Asif', 'Ashu', 'nikki'],
  true
];
const types = [];

// console.log(Farhan[0])
// console.log(Farhan[1])
// ...
// console.log(Farhan[4])
// Farhan[5] does NOT exist

for (let i = 0; i < Farhan.length; i++) {
  // Reading from Farhan array
  console.log(Farhan[i], typeof Farhan[i]);

  // Filling types array
  // types[i] = typeof Farhan[i];
  types.push(typeof Farhan[i]);
}

console.log(types);

const years = [2005, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < Farhan.length; i++) {
  if (typeof Farhan[i] !== 'string') continue;

  console.log(Farhan[i], typeof Farhan[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < Farhan.length; i++) {
  if (typeof Farhan[i] === 'number') break;

  console.log(Farhan[i], typeof Farhan[i]);
}



// Looping Backwards and Loops in Loops
const Farhan = [
  'Farhan',
  'Danish',
  2025 - 2005,
  'programmer',
  ['Asif', 'Ashu', 'nikki'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = Farhan.length - 1; i >= 0; i--) {
  console.log(i, Farhan[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}



// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/


// Coding Challenge #4

/*
Let's improve nikki's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52


4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
