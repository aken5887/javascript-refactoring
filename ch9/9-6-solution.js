/**
 * 9-6. 매직 리터럴 바꾸기
 */
const STANDARD_GRAVITY = 9.81;  // 값에 해당하는 변수를 정해주는 것이 좋음

function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}

console.log(potentialEnergy(1000, 123));