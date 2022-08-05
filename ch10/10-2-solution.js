/**
 * 10-2. 조건식 통합하기
 */
function disabilityAmount(employee) {
  return isNotEligibleForDisablity(employee)?0:1;
}

function isNotEligibleForDisablity(employee){
  return (
      employee.seniority < 2 || 
      employee.monthsDisabled > 12 || 
      employee.isPartTime
  );
}