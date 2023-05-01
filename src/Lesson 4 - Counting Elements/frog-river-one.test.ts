import { expect, test } from "vitest";

import solution from "./frog-river-one";

const testData: [number[], number, number][] = [
    [[1,3,1,4,2,3,5,4], 5, 6],
    [[1,3,1,3,2,3,5], 5, -1],
];

test("solution", () => {
  testData.forEach(([list, upper, expected]) => {
    expect(solution(upper, list)).toBe(expected);
  });
});
