/**
 * 11-3. 플래그 인수 제거하기
 */
// 예제 1
// 플래그 인수는 사용하지 않는 것이 좋다.
function setWidth(value){
  this._width = value;
}

function setHeight(value){
  this._height = value;
}

// 예제 2
class Concert {
  // 명령형으로 만들어진 2개의 외부 함수로 만들자
  regularBook(customer){}
  premiunBook(customer){}
  // 정말정말 필요한 경우에만 혹은 private 함수로 사용
  #book(customer, isPremiun){}
}

// 예제 3
function setSwitchOn();
function setSwitchOff();
