const axios = require("axios");

// Error handling Functions
const errorHandlingSsn = (ssn) => {
  if (!ssn) throw "Please provide an ssn number";
  if (typeof ssn !== "string")
    throw ` The Input ssn must be in the string format`;
  if (
    ssn !=
    String(ssn).match(
      /^([0-9])(?!\1{2}-\1{2}-\1{4})[0-9]{2}-[0-9]{2}-[0-9]{4}/gi
    )
  )
    throw `Input: ssn must be in the the proper format ex: ###-###-####`;
};

const errorHandlingPhone = (phoneNumber) => {
  if (!phoneNumber) throw "Please provide an input phone number";
  if (typeof phoneNumber !== "string")
    throw ` The input must be in the string format`;
  if (phoneNumber != String(phoneNumber).match(/^[1-9]\w{2}-\w{3}-\w{4}/gi))
    throw `Input  must be in the the proper format ex: ###-###-####`;
};

//  main Functions
async function listEmployees() {
  const { data: dataWork } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  const { data: dataPeople } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );

  let compData = [];

  for (i in dataWork) {
    let employeesArray = [];
    for (j in dataPeople) {
      dataWork[i].employees.forEach((element) => {
        if (element == dataPeople[j].id) {
          employeesArray.push({
            first_name: dataPeople[j].first_name,
            last_name: dataPeople[j].last_name,
          }); // employeesArray push
        }
      }); //forEach
    } // dataPeople loop
    compData.push({
      company_name: dataWork[i].company_name,
      employees: employeesArray,
    });
    //employeesArray = [];
  }
  return compData;
}

async function fourOneOne(phoneNumber) {
  errorHandlingPhone(phoneNumber);
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  const obj = {};

  for (i in data) {
    if (phoneNumber === data[i].company_phone) {
      obj["company_name"] = data[i].company_name;
      obj["company_address"] = data[i].company_address;
    }
  }
  if (Object.keys(obj).length === 0) throw `Nothing exist for ${phoneNumber} `;
  return obj;
}

async function whereDoTheyWork(ssn) {
  errorHandlingSsn(ssn);
  const { data: dataWork } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  const { data: dataPeople } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );

  let companyName;
  for (i in dataPeople) {
    if (ssn === dataPeople[i].ssn) {
      // console.log(ssn === dataPeople[i].ssn);
      for (j in dataWork) {
        dataWork[j].employees.forEach((element) => {
          if (element === dataPeople[i].id) {
            companyName = `${dataPeople[i].first_name} ${dataPeople[i].last_name} works at  ${dataWork[j].company_name}`;
          }
        });
      }
    }
  }
  if (companyName === undefined) {
    throw `No one exist with this SSN: ${ssn}`;
  }
  return companyName;
}

// async function men() {
//   try {
//     console.log(await listEmployees());
//   } catch (err) {
//     console.log(err);
//   }
// }
// men();

module.exports = {
  listEmployees,
  fourOneOne,
  whereDoTheyWork,
};
