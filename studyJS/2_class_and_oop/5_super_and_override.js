/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 / 춤
    part;
    // 상속을 받으면 생성자 또한 상속을 받게 되는데
    // 생성자를  덮어쓰고 싶으면 super()과 같이 생성자생성을 해주면 된다.
    constructor(name, year, part){
        super(name, year); // => super();는 IdolModel();과 같다.
        this.part = part;
    }
    // 재정의해서 원하는대로 메서드 오버라이딩
    sayHello(){
        //return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
        // 변수를 불러올때 super() 키워드는 함수에서 사용불가
        // 하지만 함수는 사용할 수 있다.
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());