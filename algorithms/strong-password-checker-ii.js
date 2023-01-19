/**
 * 2299. 强密码检验器 II
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;
  let lowerCaseFlag = false;
  let upperCaseFlag = false;
  let digitFlag = false;
  let specialCharFlag = false;

  const isLowerCase = (c) => c >= "a" && c <= "z";
  const isUpperCase = (c) => c >= "A" && c <= "Z";
  const isNumber = (c) => c >= "0" && c <= "9";
  const specialSet = new Set("!@#$%^&*()-+");

  let perv = "";

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (perv === char) {
      return false;
    }
    perv = char;

    if (isLowerCase(char)) {
      lowerCaseFlag = true;
    }
    if (isUpperCase(char)) {
      upperCaseFlag = true;
    }
    if (isNumber(char)) {
      digitFlag = true;
    }
    if (!specialCharFlag && specialSet.has(char)) {
      specialCharFlag = true;
    }
  }

  return lowerCaseFlag && upperCaseFlag && digitFlag && specialCharFlag;
};
