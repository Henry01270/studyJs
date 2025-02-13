/**
 * Prototype
 */
const testObj = {};

// __proto__는 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year){
    this.name = name;
    this.year == year;
}

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true,
}); 

console.log('----------');

// circular reference - 서로가 서로를 참조하고 있는 상태
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);
// 생성한 오브젝트의 __proto__와 생성자 함수.prototype은 같다.
// 따라서 __proto__는 부모 래퍼런스 역할을 한다.

console.log(testObj.__proto__ === Object.prototype);

console.log('----------');

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log('----------');


console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);

console.log('----------');

console.log(yuJin2.hasOwnProperty('sayHello'));
// sayHello는 yuJin2의 고유(상속받지 않은) 프로퍼티이다.

function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}
// 상속받는 기본 prototype가 래퍼런스 받게 프로퍼티를 추가하면 상속받을 수 있다.

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);

console.log(yuJin3.hasOwnProperty('sayHello'));

console.log('----------');
/**
 * StaticMethod
 */
IdolModel3.saystaticHello = function(){
    return `안녕하세요 저는 stactic method 입니다.`;
}

console.log(IdolModel3.saystaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return '안녕하세요 저는 인스턴스 메서드입ㄴ디ㅏ.'
    }
}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요 저는 prototype 메서드입니다.'
}

const yuJin4 = new IdolModel4('안유진', 2003);
// 프로퍼티 셰도잉 - class의 override와 같다.
console.log(yuJin4.sayHello());

console.log('----------------------------------');

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name}이(가) 인사를 합니다.`
}

function FemaleIdolModel(name, year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype);
// 상속받는 prototype을 setPrototypeOf 함수로 바꿀 수 있다.
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

console.log('-------------');

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);