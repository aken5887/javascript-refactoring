/**
 * 8.6 문장 슬라이드하기
 */
// 예제 1
// 사용하는 곳과 밀접하게 가까이 두는 것이 좋음
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
// 코드를 비슷한 것 끼리 묶기
function someFunc() {
  const result = availableResources.length === 0
              ? createResource()
              : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
