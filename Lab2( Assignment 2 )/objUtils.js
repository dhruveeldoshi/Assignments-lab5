// makeArrays
// error handling for makeArrays
const errorHandlingForMakeArray = (arr) => {
  if (typeof arr == "undefined") throw "Error: Parameters are not provided";
  if (!Array.isArray(arr)) throw "Error: provided input is not an Array.";

  if (arr.length < 2)
    throw " Error: Must pass atleast 2 parameters inside the array";

  for (element of arr) {
    if (Object.keys(element).length == 0) throw "Error: The Object is Empty";

    if (
      !(
        !Array.isArray(element) &&
        element != null &&
        typeof element == "object"
      )
    )
      throw "Error: The given input is not a typeof object";
  }
};
// makeArrays function
const makeArrays = (array) => {
  errorHandlingForMakeArray(array);
  let arrObj = [];
  // forEach loop for iterating through the array
  array.forEach((element) => {
    //for loop is used to iterate through objects
    for ([key, value] of Object.entries(element)) {
      arrObj.push([key, value]); // pushing key and values as an object in the arrObj
    }
  });

  return arrObj;
};
console.log(makeArrays({
    "s":"Images",
    "g":"Images",
    "C":"Images",
    "d":"Images"
   }));

/////
// isDeepEqual

const errorHandlingForIsDeepEqual = (obj) => {
  if (typeof obj == "undefined") throw "Error: Input is not provided";
  if (!obj) throw "Error: The provided input is not an object";
  if (!(typeof obj == "object" && !Array.isArray(obj)))
    throw "Error: Provided parameter is not object";
};
//error handling for isDeepEqual

const isDeepEqual = (firstObj, secondObj) => {
  if (firstObj === secondObj) {
    return true;
  }
  if (
    (typeof firstObj === "object" && firstObj !== null) ||
    (typeof secondObj === "object" && secondObj !== null)
  ) {
    errorHandlingForIsDeepEqual(firstObj);
    errorHandlingForIsDeepEqual(secondObj);
    if (Object.keys(firstObj).length !== Object.keys(secondObj).length)
      return false;

    for (let prop in firstObj) {
      if (secondObj.hasOwnProperty(prop)) {
        if (!isDeepEqual(firstObj[prop], secondObj[prop])) {
          // console.log( typeof irstObj[prop], secondObj[prop]);
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } // else if
  else {
    return false;
  }
};

//////////
// computeObject
// error handling for computeObject
const errorHandlingForComputeObject = (obj, func) => {
  if (typeof obj == "undefined") throw "Error: Input is not provided";
  if (typeof obj != "object" || Array.isArray(obj))
    throw "Error: Input is not an object type";

  if (typeof func != "function")
    throw "Error: The provided argument need to be function";
  if (Object.keys(obj) < 1) throw "Error: Object must have atleast 1 key pair";
  for (let [keys, values] of Object.entries(obj)) {
    if (typeof values != "number")
      throw "Error: The object value is not a number";
  }
};
const computeObject = (obj, func) => {
  errorHandlingForComputeObject(obj, func);
  let newObj = {};
  for (let key in obj) {
    newObj[key] = func(obj[key]);
  }

  return newObj;
};

module.exports = {
  makeArrays,
  isDeepEqual,
  computeObject,
};
