function loopSolution(A: number, B: number, K: number): number {
  let result = 0;

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      result++;
    }
  }

  return result;
}

function solution(A: number, B: number, K: number): number {
  let offset = 0;

  if (A % K === 0) {
    offset = 1;
  }

  return Math.floor((B / K)) - Math.floor(( A / K )) + offset;
}

export default solution;
