import { expect, test } from "vitest";

import fibbonacciNumbers from "./fibonacci";

const fib = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
];

test("solution", () => {
  expect(fibbonacciNumbers(14)).toEqual(fib.slice(0, 13));
  expect(fibbonacciNumbers(10)).toEqual(fib.slice(0, 9));
  expect(fibbonacciNumbers(5)).toEqual(fib.slice(0, 4));
  expect(fibbonacciNumbers(2)).toEqual(fib.slice(0, 1));
  expect(fibbonacciNumbers()).toEqual(fib.slice(0, 19));
});
