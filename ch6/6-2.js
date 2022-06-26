// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }  rating 함수로 인라인

// 예제 2 - 불필요한 간접호출
function reportLines(customer) {
  const result = [];
  // gatherCustomerData(lines, customer);
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(['location', customer.location]);
// }  reportLines 함수로 인라인
