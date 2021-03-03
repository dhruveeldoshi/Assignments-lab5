const lab1 = require("./lab1.js");

//* Question 1 Testing
console.log(lab1.questionOne([]));
console.log(lab1.questionOne([0, 2, 3]));
console.log(lab1.questionOne([5, -1, 67]));
console.log(lab1.questionOne([122, -1.4, 1013, 1]));
console.log(lab1.questionOne([1.5]));

//* Question 2 Testing
console.log(lab1.questionTwo([1, 2, 3]));
console.log(lab1.questionTwo([5, 3, 10]));
console.log(lab1.questionTwo([2, 2, 3]));
console.log(lab1.questionTwo([2, 7, 9]));
console.log(lab1.questionTwo([]));

//* Question 3 Testing
console.log(lab1.questionThree(""));
console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog."));
console.log(
  lab1.questionThree(
    "CS 546 is going to be fun & I'm looking forward to working with you all this semester!!"
  )
);
console.log(lab1.questionThree("How now brown cow!!!"));
console.log(lab1.questionThree(" Hello Mr.$xy. Welcome to the hot3l"));

//* Question 4 Testing
console.log(lab1.questionFour(25000, 3.11, 5));
console.log(lab1.questionFour(12000, 1.11, 2));
console.log(lab1.questionFour(19500, 7, 3));
console.log(lab1.questionFour(55000, 2, 6));
console.log(lab1.questionFour(5500, 3.9, 2));
