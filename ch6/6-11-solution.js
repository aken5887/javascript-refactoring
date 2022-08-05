/*
  6.11 단계 쪼개기
*/
export function priceOrder(product, quantity, shippingMethod) {
  // 기본 제품 가격
  const basePrice = product.basePrice * quantity;
  // 할인 가격
  const discount = calculateDiscount(quantity, product);
  // 배송비
  const shippingCost = calculateShippingCost(quantity, basePrice, shippingMethod);
  // 총 가격
  return basePrice - discount + shippingCost;
}

function calculateDiscount(quantity, product){
  return Math.max(quantity - product.discountThreshold, 0) *
  product.basePrice *
  product.discountRate;
}

function calculateShippingCost(quantity, basePrice, shippingMethod){
  // 개별 배송비 
  const shippingPerCase =
              basePrice > shippingMethod.discountThreshold
                ? shippingMethod.discountedFee
                : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
