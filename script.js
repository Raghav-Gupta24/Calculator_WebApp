const numbers = document.querySelectorAll(".number");
// console.log(numbers);

// numbers.forEach((number) => {
//   console.log(number);
// });

// numbers.forEach((number) => {
//   number.addEventListener("click", (event) => {
//     console.log(event.target.value);
//   });
// });
// the value here comes from the value that you assigned to the button tags

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

// const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const inputNumber = (number) =>{
  if(currentInput==='0')
  {
    currentInput = number;
  }
  else {
    currentInput+=number;
  }
};

numbers.forEach((number)=>{
  number.addEventListener(("click"), (event)=>{
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener(("click"), (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOperator = operator;
  currentInput='0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentInput);
});

const calculate = () => {
  let result=0;
  switch (calculationOperator) {
    case '+':
      result=parseInt(prevInput) + parseInt(currentInput);
      break;
    case '-':
      result=parseInt(prevInput) - parseInt(currentInput);
      break;
    case '*':
      result=parseInt(prevInput) * parseInt(currentInput);
      break;
    case '/':
      result=parseInt(prevInput) / parseInt(currentInput);
      break;
    case '%':
      result=(parseInt(prevInput) / parseInt(currentInput))*100;
      // result*=100;
      break;
    default:
      return
  }
  currentInput = result.toString();
  calculationOperator='';
};

// Making the AC button work
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentInput);
});

const clearAll = () => {
  prevInput='0';
  calculationOperator='';
  currentInput='0';
}
