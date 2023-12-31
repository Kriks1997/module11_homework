function isPrime(num) {
    if (num <= 1 || num > 1000) {
      console.log("Данные неверны");
    } else {
      let isPrime = true;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(num + " - простое число");
      } else {
        console.log(num + " не является простым числом");
      }
    }
  }
  
  isPrime(4)