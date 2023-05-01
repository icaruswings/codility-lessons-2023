function solution(A: number[]): number {
  const list = new Map();

  for (let i = 0; i <= A.length; i++) {
    list.set(i + 1, null);
  }

  for (let i = 0; i < A.length; i++) {
    list.delete(A[i]);
  }

  return list.keys().next().value;
}

export default solution;
