import { expect, test } from "vitest";

import solution from "./missing-integer";

const testData: [number[], number][] = [
  [[1, 3, 6, 4, 1, 2], 5],
  [[1, 2, 3], 4],
  [[-1, -3], 1],
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
