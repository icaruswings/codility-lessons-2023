import { expect, test } from "vitest";

import solution from "./dominator";

const testData: [number[], number][] = [
  [[3, 4, 3, 2, 3, -1, 3, 3], 7],
  [[], -1],
  [[1], 0],
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
