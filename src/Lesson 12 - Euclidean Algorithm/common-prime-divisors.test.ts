import { expect, test } from "vitest";

import solution from "./common-prime-divisors";

const testData: [[number[], number[]], number][] = [
  [
    [
      [15, 10, 3],
      [75, 30, 2],
    ],
    5,
  ],
  [
    [
      [15, 10, 3],
      [75, 30, 2],
    ],
    5,
  ],
  [
    [
      [15, 10, 3],
      [75, 30, 2],
    ],
    5,
  ],
];

test("solution", () => {
  testData.forEach(([[list1, list2], expected]) => {
    expect(solution(list1, list2)).toBe(expected);
  });
});
