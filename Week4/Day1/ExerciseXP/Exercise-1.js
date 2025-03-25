// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`); // Prediction: inside the funcOne function 3
}

// #1.1 - Running funcOne() will display an alert with "inside the funcOne function 3".

// #1.2 - If 'a' is declared with 'const', reassigning 'a' inside the if block will cause an error
// because 'const' variables cannot be reassigned.

// #2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - Running in order:
// funcThree() -> inside the funcThree function 0
// funcTwo() -> Updates 'a' to 5 (global scope)
// funcThree() -> inside the funcThree function 5

// #2.2 - If 'a' is declared with 'const', funcTwo() will cause an error
// because 'const' variables cannot be reassigned.

// #3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - Running in order:
// funcFour() -> Assigns 'a' as a global variable (window.a)
// funcFive() -> inside the funcFive function hello

// #4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - Running funcSix() will display "inside the funcSix function test"
// because 'a' inside funcSix is a new local variable, separate from the global 'a'.

// #4.2 - Declaring 'a' with 'const' inside funcSix will not cause any issue, as long as it is not reassigned.

// #5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`); // Prediction: in the if block 5
}
alert(`outside of the if block ${a}`); // Prediction: outside of the if block 2

// #5.1 - Running the code:
// "in the if block 5" (local scope inside if block)
// "outside of the if block 2" (global scope remains unchanged)

// #5.2 - If 'a' is declared with 'const', there is no issue.
// The block-scoped behavior remains the same.
