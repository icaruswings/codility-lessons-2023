function solution(A: number[]): number {
    const expectedValues = new Map();
    for (let i = 1; i <= A.length; i++) {
        expectedValues.set(i, null);
    }

    for (let i = 0; i < A.length; i++) {
        if (expectedValues.has(A[i])) {
            expectedValues.delete(A[i])
        } else {
            return 0
        }
    }

    return expectedValues.size === 0 ? 1 : 0;
}

export default solution;