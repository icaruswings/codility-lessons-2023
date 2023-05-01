function gcd(a: number, b: number, res = 1) {
  if (a == b) {
    return res * a;
  } else if (a % 2 == 0 && b % 2 == 0) {
    return gcd(Math.floor(a / 2), Math.floor(b / 2), 2 * res);
  } else if (a % 2 == 0) {
    return gcd(Math.floor(a / 2), b, res);
  } else if (b % 2 == 0) {
    return gcd(a, Math.floor(b / 2), res);
  } else if (a > b) {
    return gcd(a - b, b, res);
  } else {
    return gcd(a, b - a, res);
  }
}

function solution(N: number, M: number): number {
  return N / gcd(N, M);
}

export default solution;
