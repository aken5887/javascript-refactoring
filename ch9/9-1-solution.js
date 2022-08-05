/**
 * 9-1. 변수 쪼개기
 * 임시변수를 쓰지말고 의미있는 변수를 사용하자
 */
// 예제 1
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 예제 2
// const를 기본으로 사용하고 mutable해야하는 경우에만 let으로 변경
// 실수로 update하지 않는 것이 중요함
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
// 함수 인자의 값을 update 하는 것은 지양해야함
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
