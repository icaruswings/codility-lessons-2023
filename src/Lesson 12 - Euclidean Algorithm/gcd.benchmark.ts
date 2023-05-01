import { assert, bench } from "vitest";

// Greatest common divisor by subtraction.
function gcd1(a: number, b: number) {
  if (a == b) {
    return a;
  }

  if (a > b) {
    return gcd1(a - b, b);
  } else {
    return gcd1(a, b - a);
  }
}

// Greatest common divisor by dividing.
function gcd2(a: number, b: number) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd2(b, a % b);
  }
}

// Greatest common divisor using binary Euclidean algorithm.
function gcd3(a: number, b: number, res = 1) {
  if (a === b) {
    return res * a;
  } else if (a % 2 === 0 && b % 2 === 0) {
    return gcd3(Math.floor(a / 2), Math.floor(b / 2), 2 * res);
  } else if (a % 2 === 0) {
    return gcd3(Math.floor(a / 2), b, res);
  } else if (b % 2 === 0) {
    return gcd3(a, Math.floor(b / 2), res);
  } else if (a > b) {
    return gcd3(a - b, b, res);
  } else {
    return gcd3(a, b - a, res);
  }
}

try {
  assert(2 === gcd1(10, 4), "`gcd1` function returned incorrect result");
  assert(2 === gcd2(10, 4), "`gcd2` function returned incorrect result");
  assert(2 === gcd3(10, 4), "`gcd3` function returned incorrect result");
} catch (e) {
  console.error(e);
}

bench(
  "Greatest common divisor by subtraction",
  () => {
    gcd1(10, 4);
  },
  { iterations: 100_000 }
);

bench(
  "Greatest common divisor by dividing",
  () => {
    gcd2(10, 4);
  },
  { iterations: 100_000 }
);

bench(
  "Greatest common divisor using binary Euclidean algorithm",
  () => {
    gcd3(10, 4);
  },
  { iterations: 100_000 }
);
