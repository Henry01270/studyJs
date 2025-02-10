/**
 * Class Keyword
 */
// 클래스는 대문자 시작
// 클래스는 함수이며 클래스를 통해 생성한 오브젝트는 오브젝트로 인식
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // 클래스안에서의 메서드 생성은 function sayName(){}을 거치지 않고
    // 바로 이름입력
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
    
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);

console.log(yuJin.name, yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);
