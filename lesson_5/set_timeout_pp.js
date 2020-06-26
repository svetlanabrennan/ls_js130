/*
1. Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, and so on.
*/

// function delayLog() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 * i);
//   }
// }


function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

delayLog();

/*
2. In our solution for the previous problem, what do you think would happen if you replaced let delay with var delay? Go ahead and try it and see if you can explain the difference in behavior.

Using var makes the loop use the same "i" variable  with each iteration because var is function scope. With let which has block scope, each iteration of the loop gets a newly declared "i" variable.
*/

/*
3. In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.


*/

// setTimeout(function () {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function () {   // 2
//   console.log('upon');    // 7 
// }, 3000);

// setTimeout(function () {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function () {   // 4
//   console.log('time');    // 8
// }, 4000);


/*
4. In what sequence does the JavaScript runtime run the functions q(), d(), n(), z(), s(), f(), and g() in the following code?


*/

// setTimeout(function () { // 1
//   setTimeout(function () { // 5
//     q();
//   }, 15);

//   d(); //6 

//   setTimeout(function () { // 7
//     n();
//   }, 5);

//   z(); //8
// }, 10);

// setTimeout(function () { // 2
//   s();
// }, 20);

// setTimeout(function () { // 3
//   f();
// });

// g(); // 4

// order: g, f, d, z, n, s, q

/*
5. Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. It should wait for the indicated period, then invoke the callback function.

*/

// function afterSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }

// afterSeconds(() => console.log("hi"), 5);
