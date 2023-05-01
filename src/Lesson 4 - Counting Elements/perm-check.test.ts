import { expect, test } from "vitest";

import solution from "./perm-check";

const testData: [number[], number][] = [
    [[4,1,3,2],1],
    [[4,1,3], 0]
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
