/**
 * 7.3 캡슐화 - 기본형을 객체로 바꾸기
 */
export class Order {
  constructor(data) {
    this.priority = new Priority(data.priority);
  }

  isHighPriority(){
    // return (o) => 'high' === this.priority || 'rush' === this.priority;
    return this.priority.higherThan('normal');
  }
}

class Priority{
  #value;

  constructor(value){
      if(Priority.legalValues().includes(value)){
      this.#value = value;
    } else{
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get value(){
    return this.#value;
  }

  get index(){
    return Priority.legalValues().indexOf(this.#value);
  }

  #getIndex(value){
    return Priority.legalValues().indexOf(value);
  }

  equals(other){
    console.log(`${other} `+ this.#getIndex(other));
    return this.index === this.#getIndex(other);
  }

  higherThan(other){
    console.log(this.index+ ` vs ${other} `+ this.#getIndex(other));
    return this.index > this.#getIndex(other);
  }

  static legalValues(){
    return ['low','normal','high','rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

orders.filter(o=>{
  console.log(o.priority.value)
});

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;

const highPriorityCount = orders.filter(
  (o) => o.isHighPriority()
).length;

console.log(highPriorityCount);