function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Using the modulus operator, can check if number is divisible by 2 to find all even values

//Can also refactor this function using a ternary operator below for better performance.

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd"
}
