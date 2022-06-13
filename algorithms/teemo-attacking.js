/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let sum = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    sum += duration;
    if (0 !== i) {
      const diff = timeSeries[i] - timeSeries[i - 1];
      if (diff < duration) {
        sum -= duration - diff;
      }
    }
  }

  return sum;
};