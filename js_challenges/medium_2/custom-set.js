class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  empty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  subset(anotherSet) {
    return this.set.every(element => anotherSet.set.includes(element));
  }

  disjoint(anotherSet) {
    return this.set.every(element => !anotherSet.set.includes(element));
  }

  eql(anotherSet) {
    return this.subset(anotherSet) && anotherSet.set.every(element => {
      return this.set.includes(element);
    });
  }

  add(element) {
    if (!this.set.includes(element)) {
      this.set.push(element);
    }
    return this;
  }

  intersection(anotherSet) {
    let sharedElement = [];
    this.set.forEach(element => {
      if (anotherSet.set.includes(element)) {
        sharedElement.push(element);
      }
    });
    return new CustomSet(sharedElement);
  }

  difference(anotherSet) {
    let differentElements = [];
    this.set.forEach(element => {
      if (!anotherSet.set.includes(element)) {
        differentElements.push(element);
      }
    });
    return new CustomSet(differentElements);
  }

  union(anotherSet) {
    let unionSet = Array.from(new Set(this.set.concat(anotherSet.set)));
    return new CustomSet(unionSet);
  }
}

module.exports = CustomSet;