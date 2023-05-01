function slowSolution(X: number, Y: number, D: number): number {
    let pos = X;
    let jumps = 0;

    while(pos < Y) {
        pos += D;
        jumps++;
    }

    return jumps
}

function solution(X: number, Y: number, D: number): number {
    const distanceToTravel = Y - X;
    return Math.ceil(distanceToTravel / D)
}


export default solution;