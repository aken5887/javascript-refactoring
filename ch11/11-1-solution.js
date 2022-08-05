/**
 * 11-1. 질의함수와 변경함수 분리하기
 */
// 예제 1 - 함수는 단 한가지 고유의 기능을 수행 햐아한다.
// 가독성, 이해력, 재사용성 높아짐 -> 유지보수성이 좋아짐
function totalOutstanding() {
  return customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill(){
    // bill을 보냄
}

// 예제 2 - 악당을 찾는 로직 + 알람을 보내는 로직
export function alertForMiscreant(people, alarm) {
    const miscreant = findMisCreant(people);
    setOffAlarms(alarm, miscreant);
}

function findMisCreant(peopel){
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
