/**
 * 2325. 解密消息
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  let str = "abcdefghijklmnopqrstuvwxyz";
  let index = 0;
  let result = "";

  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " " && !map.has(key[i])) {
      map.set(key[i], str[index]);
      index++;
    }
  }
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      result += " ";
    } else {
      result += map.get(message[i]);
    }
  }
  return result;
};
