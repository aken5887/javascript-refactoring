/**
 * 로우레벨 리팩토링 하기
 * 0. 함수단위로 잘게 잘게 나눠서 의미 있는 이름으로 지정하기
 * 1. 지역변수는 사용하는 곳 가까이
 * 2. 유틸리티 성격의 함수는 외부로 추출
 * 3. for문 -> 함수로 추출하기
 * 4. switch문 -> 타입별로 다르게 한다 ? 다형성을 이용해보자
 * 5. 가능하면 지역변수 대신 필요할 때마다 호출하는 질의함수로 변경하자!
 * 6. 질의함수 -> 중첩함수로 정의
 * 7. 함수의 기능에 맞게 함수명칭 수정 하기
 * 8. 두가지 이상의 행동을 하는 반복문 쪼개기 
 * 9. 반복문 파이프라인으로 바꾸기
 * 
 * -------
 * 데이터와 로직 분리하기
 * 데이터 받아오기 - 데이터 가공하기 - 데이터 출력하기 : 잘 분리하기
 * 1. 외부 객체에 대한 의존성 끊기 - 내부에 객체 새로 만들기
 * 2. 데이터 계산 함수 / 데이터 출력 함수 분리 
 *  - 출력하고자 하는 개체들을 하나의 객체에 담기
 */
import { createStatement } from "./create_statement.js";

export function statement(invoice, plays) {
  const statement = createStatement(invoice, plays);
  return renderPlainText(statement);
}

function renderPlainText(statement){
  let result = `청구 내역 (고객명: ${statement.customer})\n`;
  for (let performance of statement.performances) {  
    result += `  ${performance.play.name}: ${usd(performance.amount / 100)} (${
      performance.audience
    }석)\n`;
  }
  result += `총액: ${usd(statement.totalAmount / 100)}\n`;
  result += `적립 포인트: ${statement.totalCredits }점\n`;
  return result;
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
