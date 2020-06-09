"use strict";

// note - refactor to use shorthand

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    this._isValidateTriangle();
    if (this.isEquilateral()) {
      return "equilateral";
    } else if (this.isIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  isEquilateral() {
    return this.side1 === this.side2 && this.side2 === this.side3;
  }

  isIsosceles() {
    return (this.side1 === this.side2 || this.side1 !== this.side3 || this.side2 === this.side3);
  }

  _isValidateTriangle() {
    let sides = [this.side1, this.side2, this.side3];
    if (
      (sides.some(side => side <= 0))
      || (this.side1 + this.side2 < this.side3)
      || (this.side1 + this.side3 < this.side2)
      || (this.side2 + this.side3 < this.side1)
    ) throw new Error("Invalid Triangle!");
  }
}

module.exports = Triangle;