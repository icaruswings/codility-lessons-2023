import { assert, bench } from "vitest";

bench(
  "solutionA",
  () => {
    const list = [2, 1, 1, 2, 3, 1];
    assert(3 === new Set(list).size);
  },
  { iterations: 100_000 }
);

bench(
  "solutionB",
  () => {
    const list = [2, 1, 1, 2, 3, 1];
    const distinct = new Map();

    for (let i = 0; i < list.length; i++) {
      distinct.set(list[i], null);
    }

    assert(3 === distinct.size);
  },
  { iterations: 100_000 }
);

bench(
  "solutionC",
  () => {
    const list = [2, 1, 1, 2, 3, 1];
    const sorted = [...list].sort((a, b) => a - b);

    const n = sorted.length;

    let result = 1;

    for (let k = 1; k < n; k++) {
      if (sorted[k] !== sorted[k - 1]) {
        result++;
      }
    }

    assert(3 === result);
  },
  { iterations: 100_000 }
);
