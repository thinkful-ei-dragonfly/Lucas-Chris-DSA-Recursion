function nth(num) {
    if (num <= 1 ) {
      return 1
    }
    return num + nth(num - 1)
  }
  
  console.log(nth(9))

