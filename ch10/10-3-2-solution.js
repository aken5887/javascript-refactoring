/**
 * 10-3. 중첩 조건문을 보호 구문으로 바꾸기
 * -> 함수에서 early exit 하게 만들수는 없을지 고민.
 */
export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital(instrument)){
      return 0;
  }
  return (instrument.income / instrument.duration) * isnstrument.adjustmentFactor;
}


function isEligibleForAdjustedCapital(instrument){
  return (instrument.capital > 0 && 
          instrument.interestRate > 0 && 
          instrument.duration > 0);
}