import Calculator from './Calculator';

const buttons = document.querySelectorAll(".buttons__btn");

console.log(buttons);

const calculator: Calculator = new Calculator(buttons);
