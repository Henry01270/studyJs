/**
 * Inheritance
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return `${this.name}이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin)

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(jiMin.sing());

const hw = new IdolModel('강현욱', 2003);
console.log(hw);

console.log('----------');

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);
// instanceof는 선개체가 후개체의 인스턴스인지를 판별 (inheritance)

console.log('----------');

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);
