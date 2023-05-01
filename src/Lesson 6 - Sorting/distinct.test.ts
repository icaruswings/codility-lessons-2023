import { expect, test } from "vitest";

import solution from "./distinct";

const testData: [number[], number][] = [[[2, 1, 1, 2, 3, 1], 3]];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
