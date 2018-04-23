/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  const bs = '\\[';
  const be = '\\]';
  const int = '[+\\-]?\\d+'
  
  return _deserialize(s.match(new RegExp(`(${bs}|${be}|${int})`, 'g')));
};

var _deserialize = function(ca) {
  if (ca === null || ca.length === 0) return null;
  
  const root = new NestedInteger();
  
  if (ca[0] != '[') {
    root.setInteger(Number(ca[0]));
    
    return root;
  }
  
  if (ca.length === 2) {
    if (ca[1] != ']')
      throw new Error('Invalid');
    
    return root;
  }
  
  ca = ca.slice(1, ca.length - 1);
  
  while (ca.length) {
    let c = ca[0];
    let end = 1;
    
    if (c === '[') {
      let depth = 1;
      while (depth > 0) {        
        if (ca[end] === '[') depth += 1;
        else if (ca[end] === ']') depth -= 1;        
        
        end = end + 1;
      }
    }
    
    let child = ca.splice(0, end);
    
    root.add(_deserialize(child));
  }
  
  return root;
};
