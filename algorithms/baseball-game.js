/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];

  for (let s of ops) {
    if (+s === +s) {
      stack.push(s);
    } else if (s === "C") {
      stack.pop();
    } else if (s === "D") {
      stack.push(stack.at(-1) * 2);
    } else if (s === "+") {
      stack.push(Number(stack.at(-1)) + Number(stack.at(-2)));
    }
  }

  return stack.reduce((a, b) => Number(a) + Number(b), 0);
};
