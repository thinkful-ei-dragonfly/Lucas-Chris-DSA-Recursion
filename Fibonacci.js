function fibonacci(num) {
    if (num < 2) {
        return 1
    } 
    return fibonacci(num-1) + fibonacci(num-2)
}

function countDown(num) {
    if (num === 0) {
        return ''
    }
    let newNumber = num - 1;
    console.log(fibonacci(num))
    return countDown(newNumber)
}

countDown(7)

function fibonacci(num) {
    let sequence = [1,1,2,3,5,8,13,21]
    if (num <= 1) {
      return 1
    }
    return `${sequence[num - 1]}, ` + `${fibonacci(num - 1)}`
  
  }
  
  
  console.log(fibonacci(7))