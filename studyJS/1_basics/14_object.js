/**
 * Object / 객체
 */
// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    // Object 안에 함수를 집어넣는 행위가 method
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

// 기존 프로퍼티 수정
yuJin2['group'] = '강현욱'
console.log(yuJin2)

// 존재하지 않는 프로퍼티 입력 시 새로운 프로퍼티 등록
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

// 프로퍼티 삭제
delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

//wonYoung = {}; 바뀔수 없으므로 재정의 x

wonYoung['group'] = '강현욱';
console.log(wonYoung);

