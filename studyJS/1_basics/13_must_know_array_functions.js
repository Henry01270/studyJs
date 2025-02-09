/**
 * Array Function methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('강현욱'));
//console.log(ivemembers.unshift());랑 같다.
// Array마지막에 값을 추가하고 key 값을 반환
console.log(iveMembers);

console.log('-----------');

// pop()
console.log(iveMembers.pop());
// Array의 마지막 값을 삭제 후 삭제한 값을 반환
console.log(iveMembers);

console.log('-----------');

console.log(iveMembers.shift());
// Array의 첫번째 값을 삭제 후 삭제한 값을 반환
console.log(iveMembers);

console.log('----------');

console.log(iveMembers.splice(0, 3));
// 0번부터 오른차순으로 3개 삭제
console.log(iveMembers);

// 위 함수는 선언한 값을들 변경시키기에 실무에서 주로 사용하지 않는다.

// 실무에서 사용하는 함수

console.log('----------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

// concat()
console.log(iveMembers.concat('강현욱'));
// Array 마지막에 값을 추가
// 새로운 메모리 영역에 반영되어 원래 Array값은 바뀌지 않는다.
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3));
// 0번부터 3번 전까지 삭제
console.log(iveMembers);

// spread operator
//...을 입력하면 중첩리스트 [[]]가 아닌 하나의 리스트로 풀어서 저장한다.
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('----------')

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);

// 더 많이 쓰는 함수들

// join()