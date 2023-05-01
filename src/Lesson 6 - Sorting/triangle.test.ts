import { expect, test } from "vitest";

import solution from "./triangle";

const testData: [number[], number][] = [
  [[10, 2, 5, 1, 8, 20], 1],
  [[10, 50, 5, 1], 0],
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
