const axios = require("axios");

// Error Handling
const errorHandlerPersonId = (id, data) => {
  if (!id) throw "Please provide the input";
  if (typeof id !== "number" || id % 1 != 0)
    throw "Please provide integer value";
  if (id < 1) throw `Id should be in range`;
  if (id > data) throw "outofbound";
};

const errorHandlerPerState = (stateAbbrv) => {
  if (!stateAbbrv) throw "Please provide input as state abbreviation.";
  if (typeof stateAbbrv !== "string") throw "Please provide string input";
  if (stateAbbrv.length > 2 || stateAbbrv.length < 2)
    throw "Please provide State Abbriviation only of two character long Ex. 'NY'";
};

const errorHandlerPersonAge = (index, data) => {
  if (!index) throw "Please provide the input parameter";
  if (typeof index !== "number" || index % 1 != 0)
    throw "Please provide integer value for the index";
  if (index < 0) throw `Index should be in range`;
  if (index > data) throw "outofbound index";
};

// Main Functions
async function getPersonById(id) {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  // throwing the error but also returning "undefined"
  errorHandlerPersonId(id, data.length);

  result = data[id - 1];
  return result;
}

async function howManyPerState(stateAbbrv) {
  errorHandlerPerState(stateAbbrv);

  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  let totalPopulation = 0;
  for (let index in data) {
    state = data[index].address.state;
    if (state.toLowerCase() === stateAbbrv.toLowerCase()) totalPopulation += 1;
  }
  if (totalPopulation === 0)
    throw "Error: Since there are no people living in state";
  return totalPopulation;
}

async function personByAge(index) {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );

  const date = new Date();
  const obj = [];
  for (let i in data) {
    let dataMonth = new Date(data[i].date_of_birth).getMonth() + 1;
    let dataDay = new Date(data[i].date_of_birth).getDate();
    let dataYear = new Date(data[i].date_of_birth).getFullYear();
    if (date.getMonth() + 1 == dataMonth) {
      if (date.getDate() >= dataDay) {
        age = date.getFullYear() - dataYear;
      } else {
        age = date.getFullYear() - dataYear - 1;
      }
    }
    if (date.getMonth() > dataMonth) {
      age = date.getFullYear() - dataYear;
    } else {
      age = date.getFullYear() - dataYear - 1;
    }
    first_name = data[i].first_name;
    last_name = data[i].last_name;
    date_of_birth = data[i].date_of_birth;

    obj.push({
      first_name: first_name,
      last_name: last_name,
      date_of_birth: date_of_birth,
      age: age,
    });
  }
  obj.sort((a, b) => {
    return a.age < b.age ? 1 : -1;
  });
  errorHandlerPersonAge(index, data.length);

  return obj[index + 2];
}

async function peopleMetrics() {
  const date = new Date();
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  let totalLetters = 0;
  let totalVowels = 0;
  let totalConsonants = 0;
  let longestName = 0;
  let shortestName = 0;
  let averageAge = 0;
  let counter = 0;
  let age = 0;
  let cityArray = [];
  for (i in data) {
    counter++;
    totalLetters =
      totalLetters + data[i].first_name.length + data[i].last_name.length;
    totalConsonants =
      totalConsonants +
      data[i].first_name.match(/[^aeiou]/gi).length +
      data[i].last_name.match(/[^aeiou]/gi).length;
    fullName = data[i].first_name.length + data[i].last_name.length;
    if (longestName.length == undefined) {
      longestName = `${data[i].first_name} ${data[i].last_name}`;
    }
    if (longestName.length - 1 < fullName) {
      longestName = `${data[i].first_name} ${data[i].last_name}`;
    }
    if (shortestName.length == undefined) {
      shortestName = `${data[i].first_name} ${data[i].last_name}`;
    }
    if (shortestName.length - 1 > fullName) {
      shortestName = `${data[i].first_name} ${data[i].last_name}`;
    }
    cityArray.push(data[i].address.city);
    let dataMonth = new Date(data[i].date_of_birth).getMonth() + 1;
    let dataDay = new Date(data[i].date_of_birth).getDate();
    let dataYear = new Date(data[i].date_of_birth).getFullYear();
    if (date.getMonth() + 1 == dataMonth) {
      if (date.getDate() >= dataDay) {
        age = date.getFullYear() - dataYear;
      } else {
        age = date.getFullYear() - dataYear - 1;
      }
    }

    averageAge += age;
  } // main foor loop

  // for mostRepeatingCity highest element logic  [Start] Source:- StackOverflow.
  let ocuurCity = {};
  let max = 0;
  let resultCity = [];
  cityArray.forEach((element) => {
    ocuurCity[element] = (ocuurCity[element] || 0) + 1;
    if (ocuurCity[element] > max) {
      max = ocuurCity[element];
      resultCity = [element];
      return;
    }
    if (ocuurCity[element] === max) {
      resultCity.push(element);
    }
  });

  // for mostRepeatingCity  [End]

  totalVowels = totalLetters - totalConsonants;
  let obj = {};

  averageAge = Math.round(averageAge / counter); // rounding of the age (Without rounding it is 41.954)
  obj.totalLetters = totalLetters;
  obj.totalVowels = totalVowels;
  obj.totalConsonants = totalConsonants;
  obj.longestName = longestName;
  obj.shortestName = shortestName;
  obj.averageAge = averageAge;
  obj.mostRepeatingCity = resultCity[0];
  return obj;
}

module.exports = {
  getPersonById,
  howManyPerState,
  personByAge,
  peopleMetrics,
};
