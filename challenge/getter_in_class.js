class Person {
    constructor(){
    }
    get name(){
        console.log(this._name);
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

const man = new Person();
man.name;
man.name = 'yong';
console.log(man);