function solution(A: number[]): number {
  if (A.length < 3) {
    return 0;
  }

  const list = [...A].sort((a, b) => a - b);

  for (let i = 0; i < list.length - 2; i++) {
    if (list[i] + list[i + 1] > list[i + 2]) {
      return 1;
    }
  }

  return 0;
}

export default solution;
