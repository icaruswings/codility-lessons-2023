// function regexSolution(N: number) {
//   const binaryN = N.toString(2);

//   const re = /(?!1)(0+)(?=1)/g;
//   const matches = binaryN.match(re);

//   if (matches) {
//     const lengths = matches.map((m) => m.length);
//     return Math.max(...lengths);
//   } else {
//     return 0;
//   }
// }

function solution(N: number) {
  const binaryN = N.toString(2);

  let counting = false;
  let gap = 0;
  let maxGap = 0;

  for (let i = 0; i < binaryN.length; i++) {
    counting = binaryN[i] === "0";

    if (counting) {
        gap++
    } else {
        maxGap = Math.max(gap, maxGap);
        gap = 0
    }
  }

  return maxGap;
}

export default solution;
