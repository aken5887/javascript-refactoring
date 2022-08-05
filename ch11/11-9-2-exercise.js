console.log('get function in class...');

class Person {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get score() {
        return (50-this.age) * this.salary;
    }
    ageAndName(type) {
        return `his name is ${this.name} and ${this.age} years old and ${type}`;
    }
    get toString() {
        return this.ageAndName('default') + ' and score is '+ this.score;
    }
}

console.log('get이 붙으면 변수임, get이 붙이 않으면 함수임');
const him = new Person('mike', 40, '50000000');
console.log(typeof him.score);
console.log(him.ageAndName('girlish'));
console.log(him.toString);