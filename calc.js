// /*
//  * Implement all your JavaScript in this file!
//  */

// // Get the button element with the ID
// const button0 = document.querySelector("#button0");
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const button4 = document.querySelector("#button4");
// const button5 = document.querySelector("#button5");
// const button6 = document.querySelector("#button6");
// const button7 = document.querySelector("#button7");
// const button8 = document.querySelector("#button8");
// const button9 = document.querySelector("#button9");
// //for 0
// button0.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button0.value;
//   });
  
// // for 1
// button1.addEventListener("click", () => {
//   // Get the input element with the ID "display"
//   const display = document.querySelector("#display");
  
//   // Append the value of the button to the input element's value
//   display.value += button1.value;
// });
// //for 2
// button2.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button2.value;
//   });
  
// //for 3
// button3.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button3.value;
//   });
  
//   //for 4
// button4.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button4.value;
//   });
//   //for 5
// button5.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button5.value;
//   });

//   //for 6
// button6.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button6.value;
//   });
  
// //for 7
// button7.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button7.value;
//   });

//   //for 8
// button8.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button8.value;
//   });

//   //for 9
// button9.addEventListener("click", () => {
//     // Get the input element with the ID "display"
//     const display = document.querySelector("#display");
    
//     // Append the value of the button to the input element's value
//     display.value += button9.value;
//   });

//   document.querySelector("#clearButton").addEventListener("click", () =>{
//     document.querySelector("#clearButton")
//     display.value=" "
//   })
  
  
  
  


const display = document.getElementById("display"); // get the display element
const buttons = document.querySelectorAll("#buttons button"); // get all the buttons
let firstOperand = null; // stores the first operand
let secondOperand = null; // stores the second operand
let currentOperation = null; // stores the current operation

// add event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("value"); // get the value of the button

    if (buttonValue === "C") { // clear the display and all stored values
      display.value = "";
      firstOperand = null;
      secondOperand = null;
      currentOperation = null;
    } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") { // store the current operation
      firstOperand = parseFloat(display.value);
      currentOperation = buttonValue;
      display.value = "";
    } else if (buttonValue === "=") { // perform the operation and display the result
      secondOperand = parseFloat(display.value);

      if (currentOperation === "+") {
        display.value = firstOperand + secondOperand;
      } else if (currentOperation === "-") {
        display.value = firstOperand - secondOperand;
      } else if (currentOperation === "*") {
        display.value = firstOperand * secondOperand;
      } else if (currentOperation === "/") {
        display.value = firstOperand / secondOperand;
      }

      firstOperand = null;
      secondOperand = null;
      currentOperation = null;
    } else { // append the digit to the display
      display.value += buttonValue;
    }
  });
});
