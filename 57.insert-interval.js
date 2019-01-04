/*
  ✔ Accepted
  ✔ 154/154 cases passed (64 ms)
  ✔ Your runtime beats 81.38 % of javascript submissions

 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.31%)
 * Total Accepted:    155.5K
 * Total Submissions: 513.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their
 * start times.
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 *
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
function insert(intervals, newInterval) {
  let startMergingIndex = 0;
  while (startMergingIndex < intervals.length && intervals[startMergingIndex].end < newInterval.start)
    startMergingIndex++;

  let endMergingIndex = startMergingIndex;
  while (endMergingIndex < intervals.length && intervals[endMergingIndex].start <= newInterval.end) {
    endMergingIndex++;
  }
  endMergingIndex -= 1;

  const toRmIntervalCnt = endMergingIndex - startMergingIndex + 1;
  if (toRmIntervalCnt > 0) {
    newInterval.start = Math.min(newInterval.start, intervals[startMergingIndex].start);
    newInterval.end = Math.max(newInterval.end, intervals[endMergingIndex].end);
  }

  intervals.splice(startMergingIndex, toRmIntervalCnt, newInterval);

  return intervals;
};

function Interval(start, end) {
    this.start = start;
    this.end = end;
}
