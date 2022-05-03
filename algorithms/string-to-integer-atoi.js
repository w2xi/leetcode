// 方法一：一般解法

/**
 * 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let flag = 1; // 1:正数 1-:负数

  s = s.trimStart();

  if (s[0] === "-") {
    flag = -1;
    s = s.slice(1);
  } else if (s[0] === "+") {
    s = s.slice(1);
  }

  let arr = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (+curr === +curr && count === i && curr !== " ") {
      arr.push(curr);
      count++;
    }
  }

  let result = arr.length > 0 ? Number(arr.join("")) : 0;
  result *= flag;

  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;

  if (result < min) {
    result = min;
  } else if (result > max) result = max;

  return result;
};

// 方法二：有限自动机 (DFA)

/**
 * 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const am = automaton();

  for (let i = 0; i < s.length; i++) {
    am.get(s[i]);
  }
  
  return am.result()
};

const MAX_NUMBER = Math.pow(2, 31) - 1;
const MIN_NUMBER = -Math.pow(2, 31);

function automaton() {
  let sign = 1, ans = 0, state = "start";
  let table = {
    start: ["start", "signed", "in_number", "end"],
    signed: ["end", "end", "in_number", "end"],
    in_number: ["end", "end", "in_number", "end"],
    end: ["end", "end", "end", "end"],
  };

  return {
    get(c) {
      state = table[state][this.getCol(c)];

      if (state === "in_number") {
        ans = ans * 10 + Number(c);
        ans = sign === 1 ? Math.min(ans, MAX_NUMBER) : Math.min(ans, -MIN_NUMBER);
      } else if (state === "signed") {
        sign = c === "-" ? -1 : 1;
      }
    },

    getCol(c) {
      if (c == " ") {
        return 0;
      }
      if (c == "+" || c == "-") {
        return 1;
      }
      if (/\d/.test(c)) {
        return 2;
      }
      return 3;
    },

    result() {
      return sign * ans;
    },
  };
}
