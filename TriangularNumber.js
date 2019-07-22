function nth(num) {
    if (num <= 1 ) {
      return 1
    }
    return num + nth(num - 1)
  }
  
  console.log(nth(9))

  function factorial(num) {
    if (num <= 1 ) {
      return 1
    }
    return num * factorial(num - 1)
  }
  
  console.log(factorial(4))