import { expect, test } from "vitest";

import solution from "./chocolates-by-numbers";

const testData: [number[], number][] = [
  [[10, 4], 5],
  [[1, 1], 1],
];

test("solution", () => {
  testData.forEach(([[count, step], expected]) => {
    expect(solution(count, step)).toBe(expected);
  });
});
