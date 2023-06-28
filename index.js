// [Is Truthy]
// if value is 'truthy' print true
const value = ``;
if (value) {
  console.log(true);
  // if value is falsey print:
  //"The boolean value false is falsy";
} else if (value === false) {
  console.log(`the boolean value false is falsy`);
  // "The null value is falsy";
} else if (value === null) {
  console.log(`the null value is falsy`);
} else if (value === undefined) {
  // "undefined is falsy";
  console.log(`undefined is falsy`);
} else if (value === 0) {
  // "The number 0 is falsy (the only falsy number)";
  console.log(`The number 0 is falsy (the only falsy number)`);
} else if (value === "") {
  // "The empty string is falsy (the only falsy string)";
  console.log(`The empty string is falsy (the only falsy string)`);
}


//[Number Line]
// create variable num1
const num1 = ``;
// create variable num2
const num2 = ``;
// create variable sum
// assign sum to num1 plus num2
const sum = num1 + num2;
if (sum > 100) {
  // "101 is greater than 100"
  console.log(`${sum} is greater than 100`);
} else if (sum <= 100 && sum > 0) {
  // "97 is greater than 0"
  console.log(`${sum} is greater than 0`);
} else if (sum === 0) {
  // "0 is equal to 0"
  console.log(`${sum} is equal to 0`);
} else if (sum < 0) {
  // "-1000 is a negative number"
  // "-5 is a negative number"
  console.log(`${sum} is a negative number`);
}


// [Greater than 5]
// create variable numb1
const numb1 = ``;
// create variable numb2
const numb2 = ``;
// if both variables are >= 5 print true
if (numb1 >= 5 && numb2 >= 5) {
    console.log(true);
} else {
    // else print false
    console.log(false);
}


// [Pair and Compare]
// create four variables param1A, param1B, param2A, param2B
const param1A = ``;
const param1B = ``;
const param2A = ``;
const param2B = ``;
// compare param1A to param1B
// compare param2A to param2B
// compare if either is truthy
if (param1A === param1B || param2A === param2B) {
  // if true print true
  console.log(true);
} else {
  // else print false
  console.log(false);
}
