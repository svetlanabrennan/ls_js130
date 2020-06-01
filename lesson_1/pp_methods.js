// function filter(array, callback) {
//   let filteredArr = [];

//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index])) {
//       filteredArr.push(array[index]);
//     }
//   }

//   return filteredArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// // 

// function map(array, callback) {
//   let transformedArr = [];

//   for (let index = 0; index < array.length; index += 1) {
//     transformedArr.push(callback(array[index]));
//   }

//   return transformedArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// 

// function reduce(array, callback, initialValue) {
//   let accumulator = initialValue;
//   let index = 0;

//   if (accumulator === undefined) {
//     accumulator = array[0];
//     index = 1;
//   }

//   while (index < array.length) {
//     accumulator = callback(accumulator, array[index]);
//     index += 1;
//   }

//   return accumulator;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

//

// function filter(array, callback) {
//   return array.reduce((prev, curr) => {
//     if (callback(curr)) {
//       prev.push(curr);
//     }
//     return prev;
//   }, [])
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]

//

function map(array, callback) {
  return array.reduce((prev, curr) => {
    prev.push(callback(curr));
    return prev;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]