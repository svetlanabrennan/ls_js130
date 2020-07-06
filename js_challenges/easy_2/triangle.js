"use strict";

class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
  }

  kind() {
    if (this.validLength() && !this.validSum()) {
      if (this.equilateral()) {
        return "equilateral";
      } else if (this.isosceles()) {
        return "isosceles";
      } else {
        return "scalene";
      }
    } else {
      throw Error
    }
  }

  equilateral() {
    return this.side1 === this.side2 && this.side2 === this.side3;
  }

  isosceles() {
    return this.side1 === this.side2 ||
      this.side1 === this.side3 ||
      this.side2 === this.side3;
  }

  validLength() {
    return this.sides.every(num => num > 0);
  }

  validSum() {
    return (
      (this.side1 + this.side2 < this.side3) ||
      (this.side1 + this.side3 < this.side2) ||
      (this.side2 + this.side3 < this.side1)
    );
  }
}

module.exports = Triangle;


