function solution(A: number[]): number {
  const odds = new Map<number, boolean>();

  for (let i = 0; i < A.length; i++) {
    var current = A[i];

    var isOdd = odds.get(current);

    if (isOdd) {
      odds.delete(current);

      continue;
    }

    odds.set(current, true);
  }

  return odds.keys().next().value;
}

function xOrSolution(A: number[]): number {
  let unpaired = 0;

  for (let v in A) {
    unpaired ^= A[v]
  }

  return unpaired
}

export default solution;
