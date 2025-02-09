/** 
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
*/
// copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log(original);
console.log(clone);

// copy by reference
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-----------')

originalObj['group'] = '강현욱';
console.log(originalObj);
console.log(cloneObj);
// reference를 그대로 가져오기 때문에 나중에 reference값이 바뀌면
// 참조중인 clone 값도 같이 바뀐다.

console.log(originalObj === cloneObj);
console.log(original === clone);
// copy by reference인 originalObj, cloneObj만 true값이 출력됨

originalObj = {
    name: '강현욱',
    group: '아이브'
};

cloneObj = {
    name: '강현욱',
    group: '아이브'
};

console.log(originalObj === cloneObj);

console.log('-----------');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2);
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
console.log('----------');

const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 == yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5)

// 같은 키값을 정의하면 나중에 정의한 값으로 저장됨
const yuJin6 = {
    name: '강현욱',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '강현욱',
};
console.log(yuJin7);

// Array도 순서 똑같이 적용
console.log('-----------');

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
];
console.log(numbers2);
