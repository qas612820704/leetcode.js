/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const digitList = num.toString().split('');

  if (digitList.length === 1) return num;

  const maxRightIndex = digitList
    .slice(0, digitList.length - 1)
    .reduceRight((indexList, nowNum, nowIndex) => {
      const rightIndex = indexList[0];
      const rightNum = digitList[rightIndex];

      return [
        ((rightNum >= nowNum)
          ? rightIndex
          : nowIndex),
        ...indexList
      ];

    }, [digitList.length - 1]);

  for (let i = 0; i < maxRightIndex.length; i += 1) {
    const j = maxRightIndex[i];

    const nowNum = digitList[i];
    const rightMaxNum = digitList[j];

    if (i != j && nowNum != rightMaxNum ) {

      digitList[i] = rightMaxNum;
      digitList[j] = nowNum;

      break;
    }
  }

  return Number(digitList.join(''))
};
