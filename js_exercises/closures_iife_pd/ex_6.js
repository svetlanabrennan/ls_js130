let Account = (function () {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    let result = "";

    for (let i = 0; i < 16; i += 1) {
      result += getRandomChr();
    }

    return result;
  }

  function getRandomChr() {
    let randomNumber = Math.floor(Math.random() * 62);
    return ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[randomNumber]);
  }


  function isValidPassword(testpswd) {
    return (userPassword === testpswd);
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(pswd) {
      if (isValidPassword(pswd)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid password";
      }
    },

    resetPassword(currentPswd, newPswd) {
      if (isValidPassword(currentPswd)) {
        userPassword = newPswd;
        return true;
      } else {
        return "Invalid password";
      }
    },

    firstName(pswd) {
      if (isValidPassword(pswd)) {
        return userFirstName;
      } else {
        return "Invalid password";
      }
    },

    lastName(pswd) {
      if (isValidPassword(pswd)) {
        return userLastName;
      } else {
        return "Invalid password";
      }
    },

    email(pswd) {
      if (isValidPassword(pswd)) {
        return userEmail;
      } else {
        return "Invalid password";
      }
    },

    displayName() {
      return this.displayName;
    }
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false


