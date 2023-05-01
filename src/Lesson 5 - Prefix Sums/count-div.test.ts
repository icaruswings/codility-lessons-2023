import { expect, test } from "vitest";

import solution from "./count-div";

const testData: [[number,number,number], number][] = [
    [[6,11,2],3],
];

test("solution", () => {
  testData.forEach(([[rangeStart, rangeEnd, divisor], expected]) => {
    expect(solution(rangeStart, rangeEnd, divisor)).toBe(expected);
  });
});
