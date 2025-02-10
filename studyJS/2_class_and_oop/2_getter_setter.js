/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }
    // 보통 setter는 바꾸고 싶은 프로퍼티와 겹치게 설정
    /**
     * setter를 사용하는 이유는
     * 평시 class로 생성한 오브젝트는 수정이 가능하지만,
     * private의 class로 생성한 오브젝트는 수정이 불가하다
     * 이때 setter를 사용해서 프로퍼티를 바꾼다.
     */
    set name(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);
// 함수처럼 정의하지만 함수가 아니라 변수취급이기 때문에 ()를 붙이면 안된다.

yuJin.name = '장원영';
console.log(yuJin);

console.log('----------');
//getter와 setter가 주로 쓰이는 경우

class IdolModel2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '강현욱';
console.log(yuJin2.name);