/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  const emailReg = /\w+@\w+\.\w+/;
  s = s.toLowerCase();

  // 正则 ( 效率很低 )
  if (emailReg.test(s)) {
    // email
    return s.replace(/(\w)([\w\s]*?)(\w)(@\w+)/, "$1*****$3$4");
  } else {
    // mobile
    return s
      .replace(/[\+\-\(\)\s]/g, "")
      .replace(/(\d{0,3})(\d{6}(\d{4}))/, (match, p1, p2, p3) => {
        if (p1.length === 0) {
          return `***-***-${p3}`;
        } else if (p1.length === 1) {
          return `+*-***-***-${p3}`;
        } else if (p1.length === 2) {
          return `+**-***-***-${p3}`;
        } else if (p1.length === 3) {
          return `+***-***-***-${p3}`;
        }
      });
  }
};

var maskPII2 = function (s) {
  const index = s.indexOf("@");

  if (index !== -1) {
    return `${s[0]}*****${s[index - 1]}${s.slice(index)}`;
  } else {
    s = s.replace(/[^0-9]/g, "");
    const len = s.length;
    if (len === 10) {
      return `***-***-${s.slice(-4)}`;
    } else {
      return `+${"*".repeat(len - 10)}-***-***-${s.slice(-4)}`;
    }
  }
};
