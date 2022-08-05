/**
 * 6-1. 함수 추출하기
 * 지역변수는 사용하는 곳에서 최대한 가까운 곳에 선언
 */
export function printOwing(invoice) {
  printBanner();
  let outstanding = caculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner(){
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function caculateOutstanding(invoice){
  // 절차지향적인 방법
  // let result = 0;
  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result;

  // 함수형 프로그래밍
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice){
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding){
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);