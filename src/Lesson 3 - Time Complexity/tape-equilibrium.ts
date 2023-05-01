function solution(A: number[]): number {
    let sumRight = 0;
    let sumLeft = 0;
    let minimalDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= A.length - 1; i++) {
        sumRight += A[i];
    }

    for (let i = 0; i < A.length - 1; i++) {
        sumRight -= A[i];
        sumLeft += A[i];

        const diff = Math.abs(sumLeft - sumRight);

        if (diff < minimalDiff) {
            minimalDiff = diff;
        }
    }

    return minimalDiff;
}

export default solution;