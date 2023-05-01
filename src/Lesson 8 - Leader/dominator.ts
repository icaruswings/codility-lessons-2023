function solution(A: number[]): number {
  const half = Math.floor(A.length / 2) + 1;
  const counts = new Map<number, number>();

  for (let i = 0; i < A.length; i++) {
    let count = counts.get(A[i]) || 0;

    if (count + 1 >= half) {
      return i;
    }

    counts.set(A[i], count + 1);
  }

  return -1;
}

export default solution;
