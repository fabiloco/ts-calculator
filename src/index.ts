import Calculator from './Calculator';

const buttons = document.querySelectorAll(".buttons__btn");
const screen = document.querySelector(".display__results");

console.log(buttons);

const calculator: Calculator = new Calculator(buttons, screen);
