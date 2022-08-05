/**
 * 10-1. 조건문 분해하기
 */
/** my solution */
function calculateCharge(date, quantity, plan) {
  return isDateSummer(date, plan)?
          quantity * plan.summerRate:
          quantity * plan.regularRate + plan.regularServiceCharge;
}

function isDateSummer(date, plan){
  if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)){
    return true;
  }
  return false;
}

/** solution */
// 중첩함수 사용
function calculateCharge2(date, quantity, plan) {

  return isSummer()? summerCharge():regularCharge();

  function isSummer(){
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge(){
    return quantity * plan.summerRate;;
  }

  function regularCharge(){
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}