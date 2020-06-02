function map(array, callback) {
  return array.reduce((prev, curr) => {
    prev.push(callback(curr));
    return prev;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]