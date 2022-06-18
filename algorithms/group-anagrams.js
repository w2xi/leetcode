/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let word of strs) {
    let temp = word.split("").sort().join("");

    if (map.has(temp)) {
      map.get(temp).push(word);
    } else {
      map.set(temp, [word]);
    }
  }

  return Array.from(map.values());
};
