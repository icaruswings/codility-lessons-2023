import { expect, test } from "vitest";

import solution from "./max-product-of-three";

const testData: [number[], number][] = [[[-3,1,2,-2,5,6], 60]];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
