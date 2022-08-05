/**
 * 10-3. 중첩 조건문을 보호 구문으로 바꾸기
 * -> 함수에서 early exit 하게 만들수는 없을지 고민.
 */
export function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  } else if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }
  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();;
}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}

console.log(someFinalComputation());