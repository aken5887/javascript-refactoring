/**
 * 8-1. 함수 옮기기
 */
export class Account {
  // 타입, 초과인출일자
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this.daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {

  constructor(type) {
    this._type = type;
  }

  get isPremium() {
    return this._type === 'Premium';
  }

  overdraftCharge(daysOverdrawn) {
    if(!this._type.isPremium){
      return daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return daysOverdrawn <= 7 
      ? baseCharge 
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
