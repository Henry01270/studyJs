/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * Number type
 */
console.log('-----Number type-----');
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof nInfinity);

/**
 * String type
 */
console.log('-----String type-----');
const codeFactory = '"코드"팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번입력
 */
console.log('-----Escaping Character & Template Literal-----');
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlach = '아이브\\코드팩토리';
console.log(backSlach);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브i '" / / / /
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + '안유진');
console.log(`${groupName} 안유진`);

/**
 * Boolean type
 */
console.log('-----Boolean type-----');
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
console.log('-----Undefined-----');
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**null type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용된다.
*/
console.log('-----null type-----');
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol type
 * 
 * 유일무이한 값을 생성할 때 사용된다. 
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
console.log('-----Symbol type-----');
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

//유일무이한 값이기에 false
console.log(symbol1 === symbol2);

/**
 * Object type
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있다.
 * key:value
 */
console.log('-----Object type-----');
const dictionary = {
    red : '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);

console.log(typeof dictionary);

/**
 * Array type
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
console.log('-----Array type-----');
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */
console.log(iveMembersArray[0]);

iveMembersArray[0] = '강현욱';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시해준다.
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */