/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge)

// 암묵적
let test = age + '';
console.log(typeof test, test)

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
console.log('98' / 2);

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log('----------');

// 문자 타입으로 변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof + '1', +'1');

/**
 * Boolean 타입으로의 변환
 */
console.log('-----------');

console.log(!'강현욱');
console.log(!!'강현욱');
console.log(!'');
console.log(!!'');
// Boolean 값에 문자열 같은 값이 있으면 그냥 true로 인식한다.

console.log(!!0); // 0은 false로 인식
console.log(!!'0');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![])
// {} (오브젝트)는 Boolean 값으로 변환했을 때 항상 ture로 인식한다.

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */