import { expect, test } from "vitest";

import solution from "./binary-gap";

const testData: [number, string, number][] = [
  [9, "1001", 2],
  [15, "1111", 0],
  [20, "10100", 1],
  [32, "100000", 0],
  [529, "1000010001", 4],
  [1041, "10000010001", 5]
];

test("solution", () => {
  testData.forEach(([input, _binary, expected]) => {
    expect(solution(input)).toBe(expected);
  });
});
