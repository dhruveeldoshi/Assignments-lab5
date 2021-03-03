// Question / Function  number 1 (Prime Numbers)
const questionOne = (arr = []) => {
  const obj = {};

  // Implement question 1 here
  // Checking:- if the input is empty then returning the empty object.
  if (arr.length == 0) {
    return obj;
  }

  // forEach loop is used to loop through the elements of an array
  arr.forEach((element) => {
    // counter is a flag for division of array element
    let counter = 0;

    // Checking the condition for numbers less 2 and float numbers;

    if (element <= 1 || element % 1 !== 0) {
      return (obj[element] = false);
    }
    for (let i = 2; i < element; i++) {
      // for loop to check the prime number condition
      if (element % i == 0) {
        // on the successfull division flag will be raised by 1
        counter += 1;
        return (obj[element] = false);
      }
    }
    /* If the counter remain 0, 
          which means that no successfull division so, we can conclude that it is a prime number */
    if (counter == 0) {
      obj[element] = true;
    }
  });
  return obj;
};

// Question / Function  number 2 ( Power, Squareroot  Function)
const questionTwo = (arr = []) => {
  // if the array is empty then return 0
  if (arr.length == 0) {
    return 0;
  } else {
    let result = 0;
    arr.forEach((element) => {
      result = result + element * element;
    });
    result = Math.sqrt(Math.pow(result, 5)).toFixed(2);

    return parseFloat(result);
  }
};

// Question / Function  number 3 (count the consonants, numbers, vowels etc)
const questionThree = function questionThree(text) {
  //*  An empty object with the name result
  let result = {
    consonants: 0,
    vowels: 0,
    numbers: 0,
    spaces: 0,
    punctuations: 0,
    specialCharacter: 0,
  };

  // Variables which will store the count of vowels, consonants, numbers etc using RegEx
  let vowels_count = String(text).match(/[aeiou]/gi);
  let consonants_count = String(text).match(/[qwrtypsdfghjklzxcvbnm]/gi);
  let spaces_count = String(text).trim().match(/[\s]/g);
  let specialCharacter_count = String(text).match(/[#$%&^~`+=|<>\\]/g);
  let punctuations_count = String(text).match(/[?.,\/!\*@;:{}\-_'()\[\]"]/g);
  let numbers_count = String(text).match(/[0-9]/g);

  //* storing the count in the object as well as cheking (for null)
  result["vowels"] = vowels_count === null ? 0 : vowels_count.length;

  result["consonants"] =
    consonants_count === null ? 0 : consonants_count.length;

  result["spaces"] = spaces_count === null ? 0 : spaces_count.length;

  result["specialCharacter"] =
    specialCharacter_count === null ? 0 : specialCharacter_count.length;

  result["punctuations"] =
    punctuations_count === null ? 0 : punctuations_count.length;

  result["numbers"] = numbers_count === null ? 0 : numbers_count.length;

  // returning the result
  return result;
};

// Question / Function  number 4 (Rate of interest for loan)
const questionFour = (amount, rate, years) => {
  let totalMonths = years * 12; //total number of months
  let interest = rate / 100 / 12; //rate of interest
  let totalAmount =
    (amount * interest * Math.pow(1 + interest, totalMonths)) /
    (Math.pow(1 + interest, totalMonths) - 1); // calculating the total amount using the formula

  return parseFloat(totalAmount.toFixed(2));
};

module.exports = {
  firstName: "Dhruveel",
  lastName: "Doshi",
  studentId: "10459460",
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
