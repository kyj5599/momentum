// calculator
// return
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const multiplyResult = calculator.multiply(10, minusResult); // -50
const divideResult = calculator.divide(multiplyResult, plusResult); // -10
const powerResult = calculator.power(divideResult, minusResult); // 1e+10
