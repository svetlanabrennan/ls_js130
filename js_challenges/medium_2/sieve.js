function prime(num) {
  let numbers = [];
  let multiples = [];

  let start = 2;
  while (true) {
    numbers.push(start);
    start += 1;
    if (start > num) {
      break;
    }
  }

  numbers.forEach((num, index, array) => {
    for (let i = index; i < array.length; i += 1) {
      multiples.push(num * array[i]);
    }
  });

  return numbers.filter(num => !(multiples.includes(num)));
}

module.exports = prime;