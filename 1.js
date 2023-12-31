function countNumbers(random) {
    let zero = 0;
    let even = 0;
    let odd = 0;
  
    for (let i = 0; i < random.length; i++) {
      if (typeof random[i] !== "number") {
        continue;
      } if (random[i] === 0) {
        zero++;
    } else {
       if (random[i] % 2 === 1) {
         even++;
        } else {
            odd++;
        }
      }
    }
  
    console.log(zero);
    console.log(even);
    console.log(odd);
  }
  
  const numbers = ["строка", 2, 3, 4, 5, 6, 7, 8, 9, 10, true, 0, 0, 0, 0, 22, 22, 22];
  
  const custom = [true, 0, 0, 0, 0, 22, 22, 22];
  
  const version = [true, 0, 0, 0, 0, 22, 22, 22, true, 0, 0, 0, 0, 22, 22, 22, true, 0, 0, 0, 0, 22, 22, 22, true, 0, 0, 0, 0, 22, 22, 22];
  
  countNumbers(numbers);
  countNumbers(custom);
  countNumbers(version);