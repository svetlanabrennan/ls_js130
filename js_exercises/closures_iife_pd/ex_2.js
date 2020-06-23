/*
Alter the myBind function written in the previous exercise to support partial function application.

*/
function myBind(func, context) {
  console.log(arguments);
  let partialArguments = [].slice.apply(arguments, [2]);
  console.log(partialArguments);
  return function () {
    let remainingArguments = [].slice.apply(arguments);
    console.log(remainingArguments);
    let fullArguments = partialArguments.concat(remainingArguments);
    //console.log(fullArguments);

    console.log(context);
    return func.apply(context, fullArguments);
  }
}
function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);
console.log(addFive);

addFive(10, 100) // 15