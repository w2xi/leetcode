/**
 * 1487. 保证文件名唯一
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (map.has(name)) {
      let cnt = map.get(name);
      while (map.has(names[i])) {
        names[i] = `${name}(${cnt++})`;
      }
      map.set(names[i], 1); // new name
      map.set(name, cnt);
    } else {
      map.set(name, 1);
    }
  }

  return names;
};