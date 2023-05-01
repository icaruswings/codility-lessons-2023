function solution(A: number[]): number {
    const values = new Map();

    for (let i = 0; i < A.length; i++) {
        values.set(A[i], null)
    }

    let integer = 1;

    while (values.has(integer)) {
        integer++
    }

    return integer;
}

export default solution;