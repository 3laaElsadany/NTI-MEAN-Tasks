// ==================== Question 1 ====================

// Without strict mode:
function test() {
    message = "Hello";
}

test();
console.log(message);

// Output:
// Hello

// ==================== Question 2 ====================
"use strict";

function testStrict() {
  "use strict";

  try {
    message1 = "Hello";
  } catch (error) {
    console.log("Question 2:", error.message);
  }
}

testStrict();

// ==================== Question 3 ====================

function deleteExample() {
  "use strict";

  var localVar = "test";

  try {
    eval("delete localVar");
  } catch (error) {
    console.log("Question 3 Error:", error.message);
  }

  const user = {
    name: "Ali",
  };

  delete user.name;

  console.log("Question 3 Object:", user);
}

deleteExample();

// ==================== Question 4 ====================

var x;

console.log("Question 4:", x); // Output: undefined

x = 10;

console.log("Question 4:", x); // Output: 10

// ==================== Question 5 ====================

sayHi();

function sayHi() {
  console.log("Question 5 Case 1: Hi");
}

try {
  sayBye();
} catch (error) {
  console.log("Question 5 Case 2:", error.message);
}

var sayBye = function () {
  console.log("Bye");
};

// ==================== Question 6 ====================

try {
  console.log(a);
  let a = 5;
} catch (error) {
  console.log("Question 6:", error.message);
}

// ==================== Question 7 ====================

var n = 1;

function demo() {
  console.log("Question 7:", n);

  var n = 2;

  console.log("Question 7:", n);
}

demo();

console.log("Question 7:", n);

// ==================== Question 8 ====================

function varScope() {
  if (true) {
    var message = "Hello";
  }

  console.log("Question 8:", message);
}

varScope();

// ==================== Question 9 ====================

function blockScope() {
  if (true) {
    let name = "Ali";
    const age = 25;

    console.log("Question 9:", name);
    console.log("Question 9:", age);
  }
}

blockScope();

// ==================== Question 10 ====================

var firstName = "Ali";
var firstName = "Omar";

console.log("Question 10 var:", firstName);

let age = 20;

// let age = 30;
// You cannot redeclare a variable declared with let in the same scope but you can reassign it.

// ==================== Question 11 ====================

const student = {
  name: "Ali",
  age: 25,
  city: "Cairo",
};

console.log("Question 11:", student);

student.age = 26;

console.log("Question 11:", student);

student.grade = "A";

console.log("Question 11:", student);

delete student.city;

console.log("Question 11:", student);

try {
  student = {
    name: "Omar",
  };
} catch (error) {
  console.log("Question 11:", error.message);
}

// ==================== Question 12 ====================

const nums = [1, 2, 3];

nums.push(4);

console.log("Question 12:", nums);

nums[0] = 100;

console.log("Question 12:", nums);

try {
  nums = [10, 20, 30];
} catch (error) {
  console.log("Question 12:", error.message);
}

// ==================== Question 13 ====================

var a;

let b;

console.log("Question 13: var a = valid");
console.log("Question 13: let b = valid");
console.log("Question 13: const c = invalid");

// ==================== Question 14 ====================

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log("Question 14 window.g1:", window.g1);
console.log("Question 14 window.g2:", window.g2);
console.log("Question 14 window.g3:", window.g3);

// ==================== Question 15 ====================

const handlers = {};

for (let i = 0; i < 3; i++) {
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}

console.log("Question 15:", handlers.fn0());
console.log("Question 15:", handlers.fn2());

// ==================== Question 16 ====================

const welcome = (name) => `Welcome, ${name}!`;

console.log("Question 16:", welcome("Ali"));

// ==================== Question 17 ====================

const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;

console.log("Question 17:", fullInfo("Ali", "Hassan", 25));

// ==================== Question 18 ====================

const multiply = (a, b) => a * b;

console.log("Question 18 Multiply:", multiply(5, 4));

const sumNumbers = (a, b) => {
  console.log("Question 18 Number 1:", a);
  console.log("Question 18 Number 2:", b);

  return a + b;
};

console.log("Question 18 Sum:", sumNumbers(5, 4));

// ==================== Question 19 ====================

const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell",
};

const { title, price, inStock } = product;

console.log("Question 19 Title:", title);
console.log("Question 19 Price:", price);
console.log("Question 19 InStock:", inStock);

// ==================== Question 20 ====================

const technologies = ["HTML", "CSS", "JS", "React"];

const [first, second] = technologies;

console.log("Question 20 First:", first);
console.log("Question 20 Second:", second);

// ==================== Question 21 ====================

function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}

console.log("Question 21:", greet("Ali", "Welcome"));

console.log("Question 21:", greet("Ali"));

console.log("Question 21:", greet());

// ==================== Question 22 ====================

function sumAll(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log("Question 22:", sumAll(1, 2, 3));

console.log("Question 22:", sumAll(10, 20, 30, 40));

// ==================== Question 23 ====================

const array1 = [1, 2];
const array2 = [3, 4, 5];

const mergedArray = [...array1, ...array2];

console.log("Question 23 Merged:", mergedArray);

const originalNumbers = [10, 20, 30];

const copiedNumbers = [...originalNumbers];

copiedNumbers.push(40);

console.log("Question 23 Original:", originalNumbers);

console.log("Question 23 Copy:", copiedNumbers);

// ==================== Question 24 ====================

const user = {
  name: "Sara",
  age: 22,
};

const contact = {
  email: "sara@nti.com",
  age: 23,
};

const mergedUser = {
  ...user,
  ...contact,
};

console.log("Question 24:", mergedUser);
// age will be 23 because the age property from the contact object overwrites the age property from the user object during the merge.

// ==================== Question 25 ====================

const values = [2, 4, 6, 8];

function total(a, b, c, d) {
  return a + b + c + d;
}

console.log("Question 25:", total(...values));

// ==================== Question 26 ====================

let person1 = {
  name: "Ali",
  child: {
    age: 5,
  },
};

let person2 = person1;

person2.name = "Omar";

console.log("Question 26:", person1.name); // Output: Omar    ==> Because person2 is a reference to the same object as person1, changing person2.name also changes person1.name.

// ==================== Question 27 ====================

const original = {
  name: "Mona",
  details: {
    city: "Cairo",
  },
};

const copy = {
  ...original,
};

copy.name = "Sara";

copy.details.city = "Alex";

console.log("Question 27 Original:", original);

console.log("Question 27 Copy:", copy);

// ==================== Question 28 ====================

const original2 = {
  name: "Mona",
  details: {
    city: "Cairo",
  },
};

const deepCopy = structuredClone(original2);

deepCopy.details.city = "Alex";

console.log("Question 28 Original:", original2);

console.log("Question 28 Deep Copy:", deepCopy);

// ==================== Question 29 ====================

const userData = {
  name: "Ahmed",
  age: 26,
  city: "Alex",
};

localStorage.setItem("userdata", JSON.stringify(userData));

const savedData = localStorage.getItem("userdata");

const parsedData = JSON.parse(savedData);

console.log("Question 29 Type:", typeof parsedData);

console.log("Question 29 Values:", parsedData);

localStorage.removeItem("userdata");

console.log("Question 29 After Remove:", localStorage.getItem("userdata"));

// ==================== Question 30 ====================

const APP_CONFIG = {
  name: "My Application",
  version: "1.0.0",

  api: {
    baseUrl: "https://api.example.com",
    features: [],
  },

  timeout: 5000,
};

APP_CONFIG.api.features.push("authentication");

console.log("Question 30:", APP_CONFIG);

try {
  APP_CONFIG = {
    name: "New App",
  };
} catch (error) {
  console.log("Question 30 Error:", error.message);
}

// ==================== Question 31 ====================

function createCard(title, price = 0, ...tags) {
  return {
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`,
  };
}

const card1 = createCard("Laptop", 15000, "electronics", "computer");

const card2 = createCard("Mouse", 500, "accessories", "computer");

console.log("Question 31 Card 1:", card1);

console.log("Question 31 Card 2:", card2);

// ==================== Question 32 ====================

const students = [
  {
    name: "Omar",
    grade: 80,
  },
  {
    name: "Mona",
    grade: 90,
  },
  {
    name: "Ali",
    grade: 70,
  },
];

for (const { name, grade } of students) {
  console.log("Question 32:", `${name} scored ${grade}`);
}
