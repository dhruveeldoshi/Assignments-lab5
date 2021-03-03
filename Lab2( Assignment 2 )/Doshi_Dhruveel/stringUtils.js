// camelCase
// error handling for camelCase
const errorHandlingString = (str) => {
  if (typeof str == "undefined") throw "Error: Input is not provided.";
  if (typeof str !== "string")
    throw "Error: The provided input is not type of string.";
  if (str.length < 1) throw "Error: String size must be greater than 1.";
  if (str.trim().length == 0)
    throw "Error: Empty spaces are not acceptable input.";
};
const camelCase = (str) => {
  errorHandlingString(str);
  let camleString = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => char.toUpperCase());

  return camleString;
};

/////////
//mashUp
// error handling for mashUp
const errorHandlingForMashUp = (str) => {
  if (typeof str == "undefined") throw "Error: Input is not provided.";
  if (typeof str !== "string")
    throw "Error: The provided input is not type of string.";
  if (str.length < 2) throw "Error: String size must be greater than 2.";
  if (str.trim().length == 0)
    throw "Error: Empty spaces are not acceptable input.";
};

const mashUp = (str1, str2) => {
  errorHandlingForMashUp(str1);
  errorHandlingForMashUp(str2);
  str1 = str1.trim();
  str2 = str2.trim();

  tempStr1 = [str2.charAt(0), str2.charAt(1)];
  tempStr2 = [str1.charAt(0), str1.charAt(1)];

  str1 = str1.replace(str1[0], tempStr1[0]);
  str1 = str1.replace(str1[1], tempStr1[1]);

  str2 = str2.replace(str2[0], tempStr2[0]);
  str2 = str2.replace(str2[1], tempStr2[1]);

  result = str1.concat(" ", str2);
  return result;
};

/////
//replaceChar
// error handling for replaceChar

const replaceChar = (str) => {
  errorHandlingString(str);
  String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
      return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
  };
  let firstChar = str[0].toLowerCase();
  let specialChar = "*";
  for (i = 1; i < str.length; i++) {
    if (str[i].toLowerCase() == firstChar && specialChar == "*") {
      str = str.replaceAt(i, specialChar);
      specialChar = "$";
    } else if (str[i].toLowerCase() == firstChar && specialChar == "$") {
      str = str.replaceAt(i, specialChar);
      specialChar = "*";
    }
  }
  return str;
};

module.exports = {
  camelCase,
  mashUp,
  replaceChar,
};
