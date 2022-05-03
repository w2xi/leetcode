// 暴力破解

/**
 * 实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (!needle) {
      return 0
  }

  for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, i + needle.length) === needle ) {
          return i
      }
  }

  return -1
};

// KMP
// 以后补充