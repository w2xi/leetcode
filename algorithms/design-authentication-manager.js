/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive;
  this.map = new Map(); // tokenId -> liveTime (latest)
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.map.set(tokenId, currentTime + this.timeToLive);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  const liveTime = this.map.get(tokenId);
  if (this.map.has(tokenId) && liveTime > currentTime) {
    this.map.set(tokenId, currentTime + this.timeToLive);
  }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let count = 0;
  this.map.forEach((item) => {
    if (item > currentTime) {
      count++;
    } else {
      this.map.delete(key); // 移除过期的 token
    }
  });
  return count;
};


/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */