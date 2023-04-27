const countPrimeNumbers = () => {

  let count = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }
  return count;
}



const hundredTime = () => {
  for (let i = 0; i <= 100; i++)
    countPrimeNumbers()
}

let t0 = performance.now();
setTimeout(() => { hundredTime() },);
let t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
