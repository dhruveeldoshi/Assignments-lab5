const arrayUtils = require("./arrayUtils");
const objUtils = require("./objUtils");
const stringUtils = require("./stringUtils");

// testcases for arrayUtils
// mean (1)
try {
  // Should Pass
  const meanOne = arrayUtils.mean([2, 3, 4]);
  console.log("mean passed successfully");
} catch (e) {
  console.error("mean failed test case");
}
try {
  // Should Fail
  const meanTwo = arrayUtils.mean(1234);
  console.error("mean did not error");
} catch (e) {
  console.log("mean failed successfully");
}

// medianSquared (2)
try {
  // Should Pass
  const medianSquaredOne = arrayUtils.medianSquared([1, 2, 4]);
  console.log("medianSquared passed successfully");
} catch (e) {
  console.error("medianSquared failed test case");
}
try {
  // Should Fail
  const medianSquaredTwo = arrayUtils.medianSquared([]);
  console.error("medianSquared did not error");
} catch (e) {
  console.log("medianSquared failed successfully");
}

// maxElement (3)

try {
  // Should Pass
  const maxOne = arrayUtils.maxElement([5, 6, 7]);
  console.log("maxElement passed successfully");
} catch (e) {
  console.error("maxElement failed test case");
}
try {
  // Should Fail
  const maxTwo = arrayUtils.maxElement("test");
  console.error("maxElement did not error");
} catch (e) {
  console.log("maxElement failed successfully");
}

// fill (4)
try {
  // Should Pass
  const fillOne = arrayUtils.fill(6);
  console.log("fill passed successfully");
} catch (e) {
  console.error("fill failed test case");
}
try {
  // Should Fail
  const fillTwo = arrayUtils.fill("test");
  console.error("fill did not error");
} catch (e) {
  console.log("fill failed successfully");
}

// countRepeating (5)
try {
  // Should Pass
  const countRepeatingOne = arrayUtils.countRepeating([
    7,
    "7",
    13,
    "Hello",
    "Hello",
    "hello",
  ]);
  console.log("countRepeating passed successfully");
} catch (e) {
  console.error("countRepeating failed test case");
}

try {
  // Should Fail
  const countRepeatingTwo = arrayUtils.countRepeating([7, "7", 13, true, null]);
  console.error("countRepeating did not error");
} catch (e) {
  console.log("countRepeating failed successfully");
}

// isEqual (6)
try {
  // Should Pass
  const meanOne = arrayUtils.isEqual(
    ["Z", "R", "B", "C", "A"],
    ["R", "B", "C", "A", "Z"]
  );
  console.log("isEqual passed successfully");
} catch (e) {
  console.error("isEqual failed test case");
}
try {
  // Should Fail
  const meanTwo = arrayUtils.isEqual([1, 2, 3]);
  console.error("isEqual did not error");
} catch (e) {
  console.log("isEqual failed successfully");
}

// stringUtil.js

// camelCase Tests
try {
  // Should Pass
  const camelCaseOne = stringUtils.camelCase("How now brown cow");
  console.log("camelCase passed successfully");
} catch (e) {
  console.error("camelCase failed test case");
}
try {
  // Should Fail
  const camelCaseTwo = stringUtils.camelCase(["Hello", "World"]);
  console.error("camelCase did not error");
} catch (e) {
  console.log("camelCase failed successfully");
}

// replaceChar Tests
try {
  // Should Pass
  const replaceCharOne = stringUtils.replaceChar(
    "Hello, How are you? I hope you are well"
  );
  console.log("replaceChar passed successfully");
} catch (e) {
  console.error("replaceChar failed test case");
}
try {
  // Should Fail
  const replaceCharTwo = stringUtils.replaceChar(1234);
  console.error("replaceChar did not error");
} catch (e) {
  console.log("replaceChar failed successfully");
}

// mashUp Tests
try {
  // Should Pass
  const mashUpOne = stringUtils.mashUp("Dhruveel", "Doshi");
  console.log("mashUp passed successfully");
} catch (e) {
  console.error("mashUp failed test case");
}
try {
  // Should Fail
  const mashUpTwo = stringUtils.mashUp("h", "p");
  console.error("mashUp did not error");
} catch (e) {
  console.log("mashUp failed successfully");
}

// objUtils.js test
//makeArrays

const test1 = { b: 2, y: 3 };
const test2 = { a: 70, c: 4, z: 5 };
const test3 = { x: 0, y: 9 };
try {
  // Should Pass
  const makeArraysOne = objUtils.makeArrays([test1, test2, test3]);
  console.log("makeArrays passed successfully");
} catch (e) {
  console.error("makeArrays failed test case");
}
try {
  // Should Fail
  const makeArraysTwo = objUtils.makeArrays([test1, 4]);
  console.error("makeArrays did not error");
} catch (e) {
  console.log("makeArrays failed successfully");
}

//isDeepEqual
try {
  // Should Pass
  const isDeepEqualOne = objUtils.isDeepEqual(
    { a: { sA: "Hello", sB: "There", sC: "Class" }, b: 7, c: true, d: "Test" },
    { c: true, b: 7, d: "Test", a: { sB: "There", sC: "Class", sA: "Hello" } }
  );
  console.log("isDeepEqual passed successfully");
} catch (e) {
  console.error("isDeepEqual failed test case");
}
try {
  // Should Fail
  const isDeepEqualTwo = objUtils.isDeepEqual({ a: 2, b: 3 }, 91);
  console.error("isDeepEqual did not error");
} catch (e) {
  console.log("isDeepEqual failed successfully");
}

//computeObject
try {
  // Should Pass
  const computeObjectOne = objUtils.computeObject(
    { a: 2, b: 3, c: 4 },
    (n) => n * 2
  );
  console.log("computeObject passed successfully");
} catch (e) {
  console.error("computeObject failed test case");
}
try {
  // Should Fail
  const computeObjectTwo = objUtils.computeObject({ hello: 5, bye: 1 });
  console.error("computeObject did not error");
} catch (e) {
  console.log("computeObject failed successfully");
}
