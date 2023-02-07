/**
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
  const result = [];
  const map = Object.create(null);

  for (let i = 0; i < keyName.length; i++) {
    if (!map[keyName[i]]) {
      map[keyName[i]] = [];
    }
    map[keyName[i]].push(keyTime[i]);
  }
  for (let key in map) {
    const item = map[key];
    if (item.length < 3) {
      continue
    }
    item.sort();
    for (let i = 2; i < item.length; i++) {
      if (toNum(item[i]) - toNum(item[i - 2]) <= 100) {
        result.push(key);
        break;
      }
    }
  }
  return result.sort();
};
// '09:00' => '0900'
function toNum(str) {
  return str.split(':').join('');
}

