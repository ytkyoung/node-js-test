const calculator = (num1, operator, num2) => {
  const calc = num1 + operator + num2;
  return console.log(eval(calc));
};

module.exports = { calculator };
