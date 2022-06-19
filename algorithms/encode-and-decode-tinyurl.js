var id = 0;
var o = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  id++;
  o[id] = longUrl;
  const shortUrl = "http://tinyurl.com/" + id;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return o[shortUrl.replace("http://tinyurl.com/", "")] || "";
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
