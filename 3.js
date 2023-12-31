function function_first(number1) {
    return function function_second(number2) {
      return number1 + number2;
    }
  }
  
  const result = function_first(24);
  console.log(result(24));