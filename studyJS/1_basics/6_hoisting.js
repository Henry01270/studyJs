/**
 * Hoisting
 */
console.log('Hello');
console.log('World!');

console.log(name);
var name = '강현욱';
console.log(name);

// var name;
// console.log(name);
// name = '강현욱';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * 다른 선언문도 호이스팅 가능
 */

console.log(yuJin);
let yuJin = '안유진';
//Cannot access 'yuJin' before initialization
//OR
//yuJin is not defined

//var는 호이스팅 현상이 일어나지만
//let과 const는 호이스팅 현상이 일어날 때 오류코드로
// 알려주기 때문에 사전에 방지할 수 있다.
