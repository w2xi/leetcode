/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  // 思路:
  // 要回到原点，'L' 出现的次数 等于 'R' 且 'U' 出现的次数等于 'D'
  // 空间复杂度: O(n)

  let o = {};

  for (let char of moves) {
    o[char] = (o[char] || 0) + 1;
  }

  return o["L"] === o["R"] && o["U"] === o["D"];

  // 思路:
  // 将物体的前后左右移动看成是在 xy 坐标轴上的移动
  // 空间复杂度: O(1)

  // let x = 0,
  //   y = 0;

  // for (let char of moves) {
  //   if (char === "R") x++;
  //   if (char === "L") x--;
  //   if (char === "U") y++;
  //   if (char === "D") y--;
  // }

  // return x === 0 && y === 0;
};
