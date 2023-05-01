import { expect, test } from "vitest";

import solution from "./cyclic-rotation";

const testData: [number, number[], number[]][] = [
    [1, [1,2,3], [3,1,2]],
    [2, [-1001,0,0], [0,0,-1001]],
    [5, [1000], [1000]],
    [42, [1,1,2,3,5], [3,5,1,1,2]]
];

test("solution", () => {
  testData.forEach(([amount, list, expected]) => {
    expect(solution(list, amount)).toEqual(expected);
  });
});
