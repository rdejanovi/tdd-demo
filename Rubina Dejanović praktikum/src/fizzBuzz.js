function fizzBuzz(broj) {
    let result;
    if(broj%3 == 0) result = "Fizz"
    if(broj%5 == 0) result = "Buzz"
    if(broj%3 == 0 && broj%5 == 0) result = "FizzBuzz"
    if(broj%3 != 0 || broj%5 != 0) result = undefined
    return result;
    
}

module.exports = fizzBuzz;