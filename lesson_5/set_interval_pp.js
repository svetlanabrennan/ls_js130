/*
1. Write a function named startCounting that logs a number to the console every second, starting with 1. Each output number should be one greater than the previous one.
*/

// function startCounting() {
//   let num = 0;
//   setInterval(function () {
//     num += 1;
//     console.log(num);
//   }, 1000);
// }

// startCounting();

/*
2. Extend the code from the previous problem with a stopCounting function that stops the logger when called.

*/

function startCounting() {
  let num = 0;
  let counterId = setInterval(function () {
    num += 1;
    console.log(num);
  }, 1000);
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();

stopCounting(counterId);

