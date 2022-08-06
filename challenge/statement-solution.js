/**
 * 로우레벨 리팩토링 하기
 * 0. 함수단위로 짧게 짧게 끊어서 의미 있는 이름을 부여하기!
 * 1. 지역변수는 사용하는 곳 가까이
 * 2. 유틸리티 성격의 함수는 외부로 추출
 * 3. for문 -> 함수로 추출하기
 * 4. switch문 -> 타입별로 다르게 한다 ? 다형성을 이용해보자
 * 5. 가능하면 지역변수 대신 필요할 때마다 호출하는 질의함수로 변경하자!
 * 6. 질의함수 -> 중첩함수로 정의
 * 7. 함수의 기능에 맞게 함수명칭 수정 하기
 * 8. 두가지 이상의 행동을 하는 반복문 쪼개기 
 * 9. 반복문 파이프라인으로 바꾸기
 */
export function statement(invoice, plays) {
  return renderPlainText(invoice, plays);
}

function renderPlainText(invoice, plays){
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  for (let performance of invoice.performances) {  
    result += `  ${playFor(performance).name}: ${usd(amountFor(performance) / 100)} (${
      performance.audience
    }석)\n`;
  }
  result += `총액: ${usd(totalAmount() / 100)}\n`;
  result += `적립 포인트: ${totalCredits()}점\n`;
  return result;

  function playFor(performance){
    return plays[performance.playID];
  }
  function creditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(performance).type){
      result += Math.floor(performance.audience / 5);
    }
    return result;
  }
  function amountFor(performance){
    let result = 0;
    switch (playFor(performance).type) {
      case 'tragedy': // 비극
        result = 40000;
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20);
        }
        result += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(performance).type}`);
    }
    return result;
  }
  function totalAmount(){
    return invoice.performances.reduce(
      (sum, p) => (sum += amountFor(p)), 0);
  }
  function totalCredits(){
    return invoice.performances.reduce(
        (sum, p) => {return sum += creditsFor(p)}, 0);
  }
}

function usd(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
}
// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
