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
    for (let i = 0; i < item.length && i + 2 < item.length; i++) {
      const diff = diffTimestamp(item[i], item[i + 2]);
      if (diff >= 0 && diff <= 3600) {
        result.push(key);
        break;
      }
    }
  }
  return result.sort();
};
function diffTimestamp(time1, time2) {
  return toTimestamp(time2) - toTimestamp(time1);
}
function toTimestamp(str) {
  const [hours, minutes] = str.split(':');
  return hours * 3600 + minutes * 60;
}

