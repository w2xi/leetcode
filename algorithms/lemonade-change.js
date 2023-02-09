/**
 * 860. 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 面额: 5 10 20

  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    const curr = bills[i];
    if (curr === 5) {
      five++;
    } else if (curr === 10) {
      ten++;
      five--; // 找零 5
    } else if (ten > 0) {
      // curr: 20, 找零 5, 10
      ten--;
      five--;
    } else {
      // curr: 20, 找零 5 * 3
      five -= 3;
    }
    if (five < 0) {
      return false;
    }
  }

  return true;
};
