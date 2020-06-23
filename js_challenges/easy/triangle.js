"use strict";

class Triangle {
  constructor(...sides) {
    console.log(sides);
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
  }

  kind() {
    if (this._isValidTriangle()) {
      if (this.isEquilateral()) {
        return "equilateral";
      } else if (this.isIsosceles()) {
        return "isosceles";
      } else {
        return "scalene";
      }
    } else {
      throw new Error("Invalid triangle");
    }
  }

  isEquilateral() {
    return (this.side1 === this.side2 && this.side2 === this.side3);
  }

  isIsosceles() {
    return (this.side1 === this.side2 ||
      this.side1 === this.side3 ||
      this.side2 === this.side3);
  }

  _isValidTriangle() {
    return ([this.side1, this.side2, this.side3].every(side => side > 0)) && (!this._sumOfLengths());
  }

  _sumOfLengths() {
    return (this.side1 + this.side2 < this.side3) ||
      (this.side1 + this.side3 < this.side2) ||
      (this.side2 + this.side3 < this.side1);
  }
}


module.exports = Triangle;

// let test = new Triangle(2, 2, 2);
// let test2 = new Triangle(2, 2, 5);
// let test3 = new Triangle(2, 5, 6);
// let test4 = new Triangle(0, 6, 7);
// let test5 = new Triangle(1, 1, 3);
// console.log(test);
// console.log(test.kind());
// console.log(test2.kind());
// console.log(test3.kind());
// console.log(test4.kind());
// console.log(test5.kind());