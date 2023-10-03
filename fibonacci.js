/*************Recursive approach to find and print the Nth number in Fibonacci series************************/

const Fibonacci = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else return Fibonacci(n - 1) - Fibonacci(n + 1);
};


console.log(Fibonacci(5));