/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){
        return new IdolModel(name, year);
    }
    // new 키워드를 사용하여 생성자 함수를 제대로 실행했는지 확인
    // undefined이면 생성자 함수 안에서 생성자 함수를
    // new 키워드로 실행
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
// new 키워드를 사용하지 않고 생성자 함수를 실행해버리면
// undefined로 값이 나오지 않을 뿐더러
// 생성자 함수에 있는 키워드들이 global에 붙어버리므로 사용 X
console.log(yuJin2);
// console.log(global.name);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

// const yuJin3 = new IdolModelArrow('안유진', 2003);
// new 키워드는 생성자 함수에서만 사용가능하다.