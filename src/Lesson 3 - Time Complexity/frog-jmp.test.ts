import { expect, test } from "vitest";

import solution from "./frog-jmp";

const testData: [[number, number, number], number][] = [
    [[10,85,30],3],
];

test("solution", () => {
  testData.forEach(([[pos, target, jump], moves]) => {
    expect(solution(pos, target, jump)).toEqual(moves);
  });
});
