/**
 * All about objects
 * 
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 
 * const yuJin = {
 *      name: '안유진',
 *      year: 2003,
 * }
 * 
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 
 * class IdolModel{
 *      name;
 *      year;
 * 
 *      constructor(name, year){
 *      this.name = name;
 *      this.year = year;
 *      }
 * }
 * 
 * 3) fuction을 사용해서 객체 생성
 */

// function 함수 안에서 this 키워드를 통해 선언해주어야 object 생성됨
// 생성자 함수
function IdolFunction(name, year){
     this.name = name;
     this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);
console.log(typeof gaEul);