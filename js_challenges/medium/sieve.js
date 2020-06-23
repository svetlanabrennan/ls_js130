"use strict";

function primes(limit) {
  let allNumbers = Array(limit - 1).fill().map((_, idx) => idx + 2);
  let multiples = [];

  allNumbers.forEach((num, index, array) => {
    for (let i = index; i < array.length; i += 1) {
      multiples.push(num * array[i]);
    }
  });

  return allNumbers.filter(num => !(multiples.includes(num)));
}

module.exports = primes;

console.log(primes(13));