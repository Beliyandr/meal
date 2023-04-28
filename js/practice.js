// function encode(str) {
//   let encodeStr = [];

//   str.split("").forEach((item) => {
//     let encoder = ["G", "g", "D", "d", "R", "r", "P", "p", "L", "l", "K", "k"];
//     let decoder = ["A", "a", "E", "e", "Y", "y", "O", "o", "U", "u", "I", "i"];
//     if (decoder.includes(item)) {
//       encodeStr.push(encoder[decoder.indexOf(item)]);
//     } else if (encoder.includes(item)) {
//       encodeStr.push(decoder[encoder.indexOf(item)]);
//     } else {
//       encodeStr.push(item);
//     }
//   });

//   return encodeStr.join("");
// }

// function decode(str) {
//   let encodeStr = [];

//   str.split("").forEach((item) => {
//     let encoder = ["G", "g", "D", "d", "R", "r", "P", "p", "L", "l", "K", "k"];
//     let decoder = ["A", "a", "E", "e", "Y", "y", "O", "o", "U", "u", "I", "i"];
//     if (decoder.includes(item)) {
//       encodeStr.push(encoder[decoder.indexOf(item)]);
//     } else if (encoder.includes(item)) {
//       encodeStr.push(decoder[encoder.indexOf(item)]);
//     } else {
//       encodeStr.push(item);
//     }
//   });

//   return encodeStr.join("");
// }

/*
const chai = require("chai");
const assert = chai.assert;

describe("Scouts are waiting!", function () {
  it("Basic Tests", function () {
    assert.strictEqual(encode("Ala has a cat"), "Gug hgs g cgt");
    assert.strictEqual(decode("Gug hgs g cgt"), "Ala has a cat");
    assert.strictEqual(encode("ABCD"), "GBCE");
    assert.strictEqual(encode("gaderypoluki"), "agedyropulik");
    assert.strictEqual(decode("agedyropulik"), "gaderypoluki");
    assert.strictEqual(decode("GBCE"), "ABCD");
  });
});

*/

words = ['asd','sdf','rrrrrr']


let theShortest = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length > theShortest.length) {
    theShortest = words[i];
  }
}
console.log(theShortest)

// let theShortest = words[0];

// for (let i = 1; i < words.length; i++) {
//   if (words[i].length < theShortest.length) {
//     theShortest = words[i];
//   }
// }
