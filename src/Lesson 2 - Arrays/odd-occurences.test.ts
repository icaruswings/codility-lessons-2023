import { expect, test } from "vitest";

import solution from "./odd-occurences";

const testData: [number[], number][] = [
    [[9,3,9,3,9,7,9], 7]
];

test("solution", () => {
  testData.forEach(([list, expected]) => {
    expect(solution(list)).toBe(expected);
  });
});
