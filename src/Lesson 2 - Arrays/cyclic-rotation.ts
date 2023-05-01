function solution(A: number[], K: number): number[] {
  let result: number[] = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    let shiftedIndex = i + K;
    
    shiftedIndex = shiftedIndex % A.length;

    if (shiftedIndex > A.length - 1) {
      shiftedIndex = shiftedIndex - A.length;
    }

    result[shiftedIndex] = A[i];
  }

  return result;
}

export default solution;
