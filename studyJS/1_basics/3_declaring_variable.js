/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 잘 사용 X
 * 2) let
 * 3) const
 */

var name = '강현욱';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '강현욱' -> 에러(const로 선언한 변수는변경불가)

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */

var name = 'name';