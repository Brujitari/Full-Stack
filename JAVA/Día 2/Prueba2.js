for (let i=1; i<1001; i+=1) {
    if (i%3 === 0 && i%5 === 0) { //Múltiplos de 3 y 5
      console.log ('FizzBuzz')
      return
    }
    if (i%3 === 0) { //Múltiplos de 3
      console.log ('Fizz')
      return
    }
    if (i%5 === 0) { //Múltiplos de 5
      console.log ('Buzz')
      return
    }
    console.log(i)
  }