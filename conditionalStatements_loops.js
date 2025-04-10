// Excercise 1
let temperature = -1; 

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's hot.");
}


//switch
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    case (temperature > 25):
        console.log("It's hot.");
        break;
    default:
        console.log("Invalid temperature.");
}

//Exercise 2: Divisibility Check  
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

//switch
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}


//Exercise 3: For loops
//1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Print all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}

//3. Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is:", sum);

//4. Print each element in the array [1, 2, 3, 4, 5]
const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

//5. Find and print the largest number in [3, 7, 2, 5, 10, 6]
const numbers = [3, 7, 2, 5, 10, 6];

const largest = numbers.reduce((max, current) => {
  return current > max ? current : max;
});

console.log("The largest number is:", largest);


// Exercise 4: While loops  
// 1. Print numbers from 1 to 10.  
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Print all even numbers between 1 and 20.  
let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result. 
let total = 0;
let count = 1;

while (count <= 100) {
  total += count;
  count++;
}

console.log("Sum from 1 to 100 is:", total);

// 4. Print all multiples of 5 less than 50.  
let n = 1;

while (n < 50) {
  if (n % 5 === 0) {
    console.log(n);
  }
  n++;
}



// Exercise 5: Do While loops  
// 1. Print numbers from 1 to 10.  
let i2 = 1;
do {
  console.log(i2);
  i2++;
} while (i2 <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result. 
let count2 = 1;
let sum2 = 0;

do {
  sum2 += count2;
  count2++;
} while (count2 <= 100);

console.log("Sum from 1 to 100 is:", sum2);

// 3. Prompt the user to enter a number greater than 10. Keep asking until 
// they enter a valid number. 
let number2;
do {
  number2 = parseInt(prompt("Enter a number greater than 10:"));
} while (number2 <= 10 || isNaN(number2));

console.log("You entered:", number2);

// 4. Create a simple guessing game where the user must  guess a number 
// between 1 and 10.
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== correctNumber);

console.log("Correct! The number was:", correctNumber);
