function solution(X: number, A: number[]): number {
    const list = new Set();

    for (let i = 0; i < A.length; i++) {
      list.add(A[i]);

      if (list.size === X) {
        return i;
      }
    }

    return -1;
}

export default solution;