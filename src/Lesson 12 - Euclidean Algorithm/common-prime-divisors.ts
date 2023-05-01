function divisors(n: number): number {
  let i = 1;
  let result = 0;

  while (i * i < n) {
    if (n % i === 0) {
      result += 2;
    }

    i++;
  }

  if (i * i === n) {
    return (result += 1);
  }

  return result;
}

function isPrimeNumber(n: number): boolean {
  return true;
}

function solution(A: number[], B: number[]): number {
  return divisors(11);
}

export default solution;
