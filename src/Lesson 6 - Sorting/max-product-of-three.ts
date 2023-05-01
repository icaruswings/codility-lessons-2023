function solution(A: number[]): number {
  const smallest: [number, number] = [
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
  ];
  const largest: [number, number, number] = [
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ];

  for (let i = 0; i < A.length; i++) {
    const val = A[i];

    if (val > largest[0]) {
      largest[2] = largest[1];
      largest[1] = largest[0];
      largest[0] = val;
    } else if (val > largest[1]) {
      largest[2] = largest[1];
      largest[1] = val;
    } else if (val > largest[2]) {
      largest[2] = val;
    }

    if (val < smallest[0]) {
      smallest[1] = smallest[0];
      smallest[0] = val;
    } else if (val < smallest[1]) {
      smallest[1] = val;
    }
  }

  const product1 = largest[0] * largest[1] * largest[2];
  const product2 = largest[0] * smallest[1] * smallest[0];

  return Math.max(product1, product2);
}

export default solution;
