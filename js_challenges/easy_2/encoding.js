"use strict";

// // without regex solution
// let functions = {

//   encode(rle) {
//     if (rle.length <= 1) {
//       return rle;
//     }

//     let result = "";
//     let count = 1;
//     let lastVal = rle[0];

//     for (let idx = 1; idx < rle.length; idx += 1) {
//       let currVal = rle[idx];

//       if (lastVal === currVal) {
//         count += 1;
//       } else {
//         if (count > 1) {
//           result += (count + lastVal);
//         } else {
//           result += (lastVal);
//         }
//         count = 1;
//         lastVal = currVal;
//       }
//     }

//     if (count > 1) {
//       result += (count + lastVal);
//     } else {
//       result += (lastVal);
//     }

//     return result;
//   },

//   decode(rle) {
//     if (rle.length <= 1) {
//       return rle;
//     }

//     let result = "";
//     let count = "";

//     rle.split("").forEach(chr => {
//       if (/[0-9]/.test(chr)) {
//         count += chr;
//       } else {
//         if (count !== "") {
//           result += (chr.repeat(Number(count)));
//           count = "";
//         } else {
//           result += (chr);
//           count = "";
//         }
//       }
//     });

//     return result;
//   }
// }


// using regex solution
let functions = {

  encode(rle) {
    if (rle.length <= 1) {
      return rle;
    }

    let result = rle.match(/(.)\1*/g) || [];

    return result.map(chr => {
      if (chr.length > 1) {
        let length = chr.length;
        return length + chr[0];
      } else {
        return chr;
      }
    }).join("");
  },

  decode(rle) {
    if (rle.length <= 1) {
      return rle;
    }

    return rle.match(/\d*\D/g).map(chr => {
      let digit = Number((chr.match(/[0-9]/g) || [1]).join(""));
      let letter = (chr.match(/[a-zA-Z]/g) || [" "])[0];
      return letter.repeat(digit);
    }).join("");
  }
}

console.log(functions.decode("2 hs2q q2w2 "));

module.exports = functions;