/**
 * 11-12. 오류 코드를 예외로 바꾸기
 * 에러를 명확하게 던져주고, 어떤 에러인지 따라서 에를 상속하는
 * 클래스를 만들어서 처리
 */
function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

class OrderProcessingError extends Error {
  constructor(errorCode){
    super();
    this.errorCode = errorCode;
  }
}

try{
  const result = localShippingRules();
}catch(error){
  if(error instanceof OrderProcessingError){
    console.log(error);
  }
}