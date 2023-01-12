/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map(knowledge);
  return s.replace(/\((\w+)\)/g, (_, key) => map.get(key) ? map.get(key) : '?');
};