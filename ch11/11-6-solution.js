/**
 * 11-6. 질의 함수를 매개변수로 바꾸기
 */
targetTemperature(plan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
// thermostat 객체에 대한 의존도를 삭제 해야함.
// ** 외부 의존성이 있는 경우 함수 매개변수로 전달 받는 것이 이상적!
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}