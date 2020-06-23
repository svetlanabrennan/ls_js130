"use strict";

class CustomSet {
  constructor(array = []) {
    this.array = array;
  }

  empty() {
    return this.array.length === 0;
  }

  contains(num) {
    return this.array.includes(num);
  }

  subset(anotherSet) {
    return this.array.every(elem => anotherSet.contains(elem));
  }

  disjoint(anotherSet) {
    return this.array.every(elem => !anotherSet.contains(elem));
  }

  eql(anotherSet) {
    if (this.array.length !== anotherSet.array.length) {
      return false;
    }

    return this.subset(anotherSet);
  }

  add(num) {
    if (!this.contains(num)) {
      this.array.push(num);
    }
    return this;
  }

  intersection(anotherSet) {
    let sameElements = this.array.filter(elem => anotherSet.contains(elem));
    return new CustomSet(sameElements);
  }

  difference(anotherSet) {
    let sameElements = this.array.filter(elem => !anotherSet.contains(elem));
    return new CustomSet(sameElements);
  }

  union(anotherSet) {
    let unionSet = new CustomSet(this.array);
    anotherSet.array.forEach(elem => unionSet.add(elem));
    return unionSet;
  }

}

// let test = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
// console.log(test);

module.exports = CustomSet;