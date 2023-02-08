/**
 * [1233] 删除子文件夹
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort();
  set = new Set();
  const result = [];

  for (let i = 0; i < folder.length - 1; i++) {
    for (let j = i + 1; j < folder.length; j++) {
      if (isSub(folder[i], folder[j])) {
        set.add(j);
      } else {
        break;
      }
    }
  }
  for (let i = 0; i < folder.length; i++) {
    if (!set.has(i)) {
      result.push(folder[i]);
    }
  }
  return result;
};
function isSub(parent, child) {
  return child.startsWith(parent + '/');
}

