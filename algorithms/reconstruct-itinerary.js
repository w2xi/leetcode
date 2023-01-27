/**
 * 332. 重新安排行程
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort();
  let result = [];
  const path = ["JFK"];
  const used = Array(tickets.length).fill(false);

  const backTracking = (tickets) => {
    if (path.length === tickets.length + 1) {
      result = path.slice();
      return true;
    }
    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      if (used[i]) continue;
      if (path.at(-1) === from) {
        path.push(to);
        used[i] = true;
        if (backTracking(tickets)) {
          return true;
        }
        used[i] = false;
        path.pop();
      }
    }
    return false;
  };
  backTracking(tickets);

  return result;
};
