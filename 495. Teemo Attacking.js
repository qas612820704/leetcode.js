/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries === null && timeSeries.length === 0) return 0;
  
  return timeSeries.slice(1).reduce((times, timePoint, i) => {
    const prevTimePoint = timeSeries[i];
    
    const overAdd = duration  - (timePoint - prevTimePoint);
    
    return (overAdd > 0)
      ? times - overAdd
      : times;
  }, timeSeries.length * duration);
};