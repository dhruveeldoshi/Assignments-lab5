const people = require("./people.js");
const work = require("./work.js");

async function main1() {
  // People.js
  //1. getPersonById
  try {
    const peopleData = await people.getPersonById(43);
    console.log(peopleData);
  } catch (err) {
    console.log(err);
  }
  //2. howManyPerState

  try {
    const peoplePerState = await people.howManyPerState("NY");
    console.log(peoplePerState);
  } catch (err) {
    console.log(err);
  }
  //3. personByAge
  try {
    const age = await people.personByAge(43);
    console.log(age);
  } catch (err) {
    console.log(err);
  }

  //4. peopleMetrics()
  try {
    const peopleMet = await people.peopleMetrics();
    console.log(peopleMet);
  } catch (err) {
    console.log(err);
  }
  // Work.js
  // 1. listEmployees()
  try {
    const employeesList = await work.listEmployees();
    console.log(employeesList);
  } catch (err) {
    console.log(err);
  }

  //2. fourOneOne()
  try {
    const fourOne = await work.fourOneOne("240-144-7553");
    console.log(fourOne);
  } catch (err) {
    console.log(err);
  }

  try {
    const ssnWork = await work.whereDoTheyWork("299-63-8866");
    console.log(ssnWork);
  } catch (err) {
    console.log(err);
  }
}

main1();
