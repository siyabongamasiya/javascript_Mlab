//Exercise 1: Numbers 
let integerNum = 20;
let floatNum = 4.5;

let addition = integerNum + floatNum;
let subtraction = integerNum - floatNum;
let multiplication = integerNum * floatNum;
let division = integerNum / floatNum;
let modulus = integerNum % floatNum;
let exponentiation = integerNum ** 2;

console.log("Integer Number:", integerNum);
console.log("Floating Number:", floatNum);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);


// Exercise 2: Boolean and Operators  
// 1. Comparison between two numbers
let num1 = 5;
let num2 = 10;

let isGreater = num1 > num2;
let isEqual = num1 === num2;
let isNotEqual = num1 !== num2;

console.log("Is num1 greater than num2?", isGreater);
console.log("Is num1 equal to num2?", isEqual);
console.log("Is num1 not equal to num2?", isNotEqual);

// 2. Declare x and y
let x = 8;
let y = 12;

console.log("Is x > y?", x > y);
console.log("Is x <= y?", x <= y);
console.log("Is x == y?", x == y);
console.log("Is x != y?", x != y);

// 3. Logical operations
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. Assignment operators
let p = 10;

p += 5;
console.log("After += 5:", p);

p -= 3;
console.log("After -= 3:", p);

p *= 2;
console.log("After *= 2:", p);

p /= 4;
console.log("After /= 4:", p);

p %= 3;
console.log("After %= 3:", p);