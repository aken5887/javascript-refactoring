/**
 * 11-10. 명령을 함수로 바꾸기
 * 객체를 매번 생성해야 하는 경우 메모리 cost가 증가 할 수 있음
 * 일시적으로 계산하는 경우에는 일반 함수로 만드는 게 더 좋음
 */
export function charge(customer, usage, provider){
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}