/*************Recursive approach to find and print the Nth number in Fibonacci series************************/
//Fn = F(n-1) +F(n-2);
//[0,1,1,]

const Fibonacci = (n) => {
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  } else return Fibonacci(n - 1) + Fibonacci(n - 2);
};

console.log(8 + "th fibonacci number is " + Fibonacci(8));

/***************print Fibonacci series up to nth number***************/
const printFibonacciSeries = (n) => {
  let n1 = 0;
  let n2 = 1;
  let nextnum;

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextnum = n1 + n2;
    n1 = n2;
    n2 = nextnum;
  }
};

printFibonacciSeries(5);
