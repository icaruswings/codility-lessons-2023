import { expect, test } from "vitest";

import solution from "./tape-equilibrium";

const testData: [number[], number][] = [
  [[3,1,2,4,3],1],
  [[1,1],0],
  [[1, 2, 3, 4, 2],0],
  [[-1000, 1000], 2000]
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
