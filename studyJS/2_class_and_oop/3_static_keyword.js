/**
 * Static Keyword
 */

class IdolModel{
    name;
    year;
    // static은 인스턴스가 아닌 클래스에 귀속된다.
    static groupName = '아이브';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

// static은 class에 직접 귀속되기 때문에 new키워드로 인스턴스 선언할 필요가 없다.
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

console.log('---------');
/**
 * 현대에서 가장 많이 사용하는 방식
 * factory constructor
 */
class IdolModel2{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel2(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);