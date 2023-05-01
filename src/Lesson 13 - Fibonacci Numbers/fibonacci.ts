// F(0) = 0
// F(1) = 1
// F(M) = F(M - 1) + F(M - 2) if M >= 2

function fibonacciNumbers(count: number = 20) {
  const result: number[] = [0, 1];

  if (count <= result.length) {
    return result.slice(0, Math.max(count - 1, 0));
  }

  let i: number = 2;

  while (i >= 2 && i <= count - 2) {
    const next = result[i - 1] + result[i - 2];

    result[i] = next;

    i++;
  }

  return result;
}

export default fibonacciNumbers;
