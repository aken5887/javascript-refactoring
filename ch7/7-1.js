/**
 * 7-1. 캡슐화 - 레코드
 */
class Organization {
    #name;
    #country;
    #data;

    constructor(data){
        this.#name = data.name;
        this.#country = data.country;
        this.#data = data;
    }

    get name(){
        return this.#name;
    }

    get country(){
        return this.#country;
    }

    set country(value){
        this.#country = value;
    }

    get rawData(){
        return { ...this.#data }; // 얕은 복사
    }
}

// const organization = { name: 'Acme Gooseberries', country: 'GB' };
// organization.name = 'Dream Coding';
const data = {
    'name' : 'Dream Coding',
    'country' : 'Korea'
}
const organization = new Organization(data);
console.log(organization.name);
console.log(organization.country);

// organization.name = 'Yong'
// organization.country = 'Japan'
// console.log(organization.name);
// console.log(organization.country);
const rawData = organization.rawData;
rawData.country = 'Japan';
console.log(rawData);
console.log(organization.rawData);