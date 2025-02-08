/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('---------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
// 앞 오퍼레이터 값인 number가 result 값으로 저장되고
// 뒤 오퍼레이터 값 ++이 number에 더해짐
// 따라서 result의 값은 1
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면?
 */
console.log('---------');

let sample = '99';

console.log(+sample)
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(sample);
console.log(typeof sample);

sample = '안유진';
//NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
// -99
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log('---------');

console.log(5 == 5);
console.log(5 == '5');
// number type과 string type 값이 변환되어 계산되기 때문에 true
console.log(0 == '');
// type에 상관없기에 0 == False
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log('---------');

console.log(5 === 5);
console.log(5 === '5');
// ===은 값이 변환되지 않고 계산되어 false
// ==는 주로 사용하지 않고 실무에서는 주로 === 세개를 사용한다

console.log('---------');

console.log(5 != 5);
console.log(5 !== 5)
// ! 비교 연산자도 동일하게 적용

console.log('---------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
//자주 사용되는 operator
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
//연산자의 값이 true면 왼쪽 값 반환, false면 오른쪽 값 반환

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */
// && 조건은 모두 true여야 true를 반환한다
console.log('---------');

console.log(true && true);
console.log(true && false);

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || false);

// 사용 예시
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

console.log(10 > 1 || 20 < 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evalution)
 * 
 * && (and)와 || (or)의 기본적인 작동원리
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 ture면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 * 
 */
console.log('---------');

console.log(false && '아이브');
console.log(true && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');

console.log(true && true && '아이브');
console.log(ture && false && '아이브');

/**
 * 지수 연산자
 */
console.log('---------');

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
console.log('---------');

let name;
console.log(name);

name = name ?? '강현욱';
console.log(name);
// 좌측값이 null이거 nudefined일때 우측 값을 반환

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '강현욱';
console.log(name2);
