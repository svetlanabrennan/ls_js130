"use strict";

let DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

class Luhn {
  constructor(input) {
    this.input = input.replace(/ /g, "").split("");
  }

  valid() {
    if (!this.isValidLength() || !this.containsAllDigits()) {
      return false;
    }

    let reversed = this.input.reverse();
    let doubled = this.doubleDigit(reversed);
    let sum = this.sumDigits(doubled);
    return sum % 10 === 0;
  }

  doubleDigit(digits) {
    return digits.map((digit, idx) => {
      if ((idx + 1) % 2 === 0) {
        let sum = digit * 2;
        if (sum > 9) {
          return sum - 9;
        } else {
          return sum;
        }
      } else {
        return Number(digit);
      }
    });
  }

  sumDigits(digits) {
    return digits.reduce((prev, curr) => prev + curr);
  }

  isValidLength() {
    return this.input.length > 1;
  }

  containsAllDigits() {
    return this.input.every(num => !DIGITS.includes(num));
  }
}

module.exports = Luhn;