import { expect, test } from "vitest";

import solution from "./perm-missing-element";

const testData: [number[], number][] = [
    [[2,3,1,5],4],
    [[], 1]
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
