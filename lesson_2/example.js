function foo() {
  if (true) {
    let bar = 1;
    console.log(bar); // 1
    console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
    console.log(baz); // ReferenceError: Cannot access 'baz' before initialization
    let qux = 2;
  }

  console.log(bar); // ReferenceError: bar is not defined
  console.log(qux); // ReferenceError: qux is not defined
  console.log(baz); // ReferenceError: Cannot access 'baz' before initialization

  let baz = 3;
}

foo();