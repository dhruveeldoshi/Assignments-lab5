// error handling for mean, medianSquared, maxElement
const errorChecking = (arr) => {
  if (typeof arr == "undefined") throw "Error: Parameters are not provided";
  if (!Array.isArray(arr)) throw "Error: The given input is not an array";
  if (arr.length < 1) throw "Error: Array is empty. Provide valid inputs.";
  arr.forEach((element) => {
    if (typeof element !== "number") {
      throw "Error: Not a Number";
    }
  });
};

////
////
// mean
const mean = (arr = []) => {
  errorChecking(arr);

  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  total = total / arr.length;
  return parseFloat(total.toFixed(2));
};

////
////
// meanSquared
const medianSquared = (arr = []) => {
  errorChecking(arr);
  let array = arr.sort((a, b) => {
    return a - b;
  });
  if (array.length % 2 !== 0) {
    result = array[array.length / 2 - 0.5];
  } else if (array.length % 2 === 0) {
    result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  }

  return Math.pow(result, 2);
};
////
////
//maxElement
const maxElement = (arr = []) => {
  errorChecking(arr);
  let maxItem = Math.max(...arr);
  let indOfMax = arr.indexOf(Math.max(...arr));

  let obj = {};
  obj[maxItem] = indOfMax;

  return obj;
};

////
////
// fill
// Error handling for Fill function
const errorHandlingForFill = (end) => {
  if (typeof end == "undefined") throw "Error: Parameter is not provided";
  if (typeof end !== "number") throw "Error: not a number";
  if (end < 1) throw "Error: value must be potitive";
};
const fill = (end, value) => {
  errorHandlingForFill(end);
  let arr = [];
  if (value === undefined) {
    for (let i = 0; i < end; i++) {
      arr[i] = i;
    }
  } else if (value !== undefined) {
    for (let i = 0; i < end; i++) {
      arr[i] = value;
    }
  }

  return arr;
};

////
////
// isEqual
// error handling for isEqual function
const errorHandlingForIsEqual = (arr) => {
  if (typeof arr == "undefined") throw "Error: Parameters are not provided";
  if (!Array.isArray(arr)) throw "Error: The given input is not an array";
  if (arr.length < 1) throw "Error: Array is empty. Provide valid inputs.";
};
const isEqual = (arr1 = [], arr2 = []) => {
  errorHandlingForIsEqual(arr1);
  errorHandlingForIsEqual(arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  tempArr1 = [].concat.apply([], arr1);
  tempArr2 = [].concat.apply([], arr2);
  tempArr1.sort();
  tempArr2.sort();

  if (tempArr1.every((val, index) => val === tempArr2[index])) {
    return true;
  } else {
    return false;
  }
};

////
////
// countRepeating
// error handling for countRepeating
const errorHandlingForCountRepeating = (arr) => {
  if (typeof arr == "undefined") throw "Error: Parameters are not provided";
  if (!Array.isArray(arr)) throw "Error: The given input is not an array";
  arr.forEach((element) => {
    if (typeof element !== "number" && typeof element !== "string") {
      throw `Error: Input is Not a Number or a String`;
    }
  });
};

// countRepeating
const countRepeating = (arr = []) => {
  errorHandlingForCountRepeating(arr);
  const countObject = {};
  arr.forEach((element) => {
    countObject[element] = (countObject[element] || 0) + 1;
  });

  for (let n in countObject) {
    if (countObject[n] < 2) {
      delete countObject[n];
    }
  }
  return countObject;
};

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  isEqual,
  countRepeating,
};
