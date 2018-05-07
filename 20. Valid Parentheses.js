/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  return s.split('').every(c => {
    switch (c) {
      case '(':
      case '[':
      case '{':
        stack.push(c)
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      }
    return true;
  }) && stack.length === 0;
};
/* beats 99.43% */
