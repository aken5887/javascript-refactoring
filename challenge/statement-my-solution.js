
export function statement(invoice, plays, stType) {
  const performances = new Array();
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    performances.push(new Performance(perf.playID, play.type, perf.audience, play.name))
  }
  const myInvoices = new Invoices(invoice.customer, performances);
  if(stType === 'html'){
    return myInvoices.htmlText();
  }else{
    return myInvoices.plainText();
  }
}


const format  = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
}).format;

class Invoices {
  constructor(customer, performances) {
    this.customer = customer;
    this.performances = performances
    this._totalAmount = 0;
    this._volumnCredits = 0;
  }

  totalAmount(){
    this.performances.forEach((p) => {
      this._totalAmount += p.basicAmount});
    return this._totalAmount;
  }

  volumeCredits() {
    this.performances.forEach((p) => 
    this._volumnCredits += p.bonusCredit);
    return this._volumnCredits;
  }

  plainText() {
    this._result = `청구 내역 (고객명: ${this.customer})\n`;
    this.performances.forEach((p) => this._result += p.toString());
    this._result += `총액: ${format(this.totalAmount() / 100)}\n`;
    this._result += `적립 포인트: ${this.volumeCredits()}점\n`;
    return this._result;
  }

  /* <h1>청구 내역 (고객명: BigCo)</h1>
    <table>
    <tr><th>play</th><th>석</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
      <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
      <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
    </table>
    <p>총액: <em>$1,730.00</em></p>
    <p>적립 포인트: <em>47</em>점</p> */
    
  htmlText() {
    this._result = `<h1>청구 내역 (고객명: ${this.customer})</h1>\n`;
    this._result += '<table>\n'
    this._result += '<tr><th>play</th><th>석</th><th>cost</th></tr> ';
    this.performances.forEach((p) => {
        this._result += p.toHtml();
    });
    this._result += '</table>\n';
    this._result += `<p>총액: <em>${format(this.totalAmount() / 100)}</em></p> \n`;
    this._result += `<p>적립 포인트: <em>${this.volumeCredits()}</em>점</p>\n`;
    return this._result;
  }
}

class Performance {
  constructor(playId, playType, audience, playName) {
    this.playId = playId;
    this.playType = playType;
    this.audience = audience;
    this.playName = playName;
    this._basicAmount = 0;
    this._bonusCredit = 0;
  }

  get basicAmount() {
    switch (this.playType) {
      case 'tragedy': // 비극
        this._basicAmount = 40000;
        if (this.audience > 30) {
          this._basicAmount += 1000 * (this.audience - 30);
        }
        break;
      case 'comedy': // 희극
        this._basicAmount = 30000;
        if (this.audience > 20) {
          this._basicAmount += 10000 + 500 * (this.audience - 20);
        }
        this._basicAmount += 300 * this.audience;
        break;
    }
    return this._basicAmount;
  }
  
  get bonusCredit() {
    // 포인트를 적립한다.
    this._bonusCredit += Math.max(this.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === this.playType){
      this._bonusCredit += Math.floor(this.audience / 5);
    } 
    return this._bonusCredit;
  }

  toString() {
    return `  ${this.playName}: ${format(this.basicAmount / 100)} (${this.audience}석)\n`;
  }

  toHtml() {
    return  `<tr><td>${this.playName}</td><td>${this.audience}</td><td>${format(this.basicAmount / 100)}</td><tr>\n`;
  }
}


// 테스트 데이터
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like' : { name: 'As You Like It', type: 'comedy' },
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


/** 테스트 코드 */
const result = statement(invoicesJSON[0], playsJSON, 'plain');
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
const result2 = statement(invoicesJSON[0], playsJSON, 'html');
const expected2 = '<h1>청구 내역 (고객명: BigCo)</h1>\n'
'<table>\n'
'<tr><th>play</th><th>석</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n' +
'<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n' +
'<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n' +
'</table>\n' +
'<p>총액: <em>$1,730.00</em></p>\n'
'<p>적립 포인트: <em>47</em>점</p>\n';
console.log(result2);