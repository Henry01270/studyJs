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




// 더 많이 쓰는 함수들!!!!!!!!!!!

// join()
console.log(iveMembers.join());
// 콤마(,)를 기준으로 모든 값을 합칠 수 있다.
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순 정렬 (return 반환값이 없다.)
iveMembers.sort();
console.log(iveMembers);

// reverse()
// 내림차순 정렬
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

/**
 * sort 활용
 * a, b를 비교했을 때
 * 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1)
console.log(numbers);

// map()
// Array 안에 있는 값들을 한번씩 순회하는 함수
// 기존 Array 변경 x, 새로운 Array 반환
console.log('----------')
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`))

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter()
// Array 안에 값들을 한번씩 순회하되 참인 경우에 해당 값들만 반환
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
// Array 안에 값들을 한번씩 순회하되 참 값들중 가장 앞에 있는 값 하나만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
// 찾은 값의 Index(Array 위치)를 반환한다.
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
// p(previous) n(next)
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .lenth를 이용해서 구할 수 있다.
console.log(numbers.reduce((p, n) => p + n, 0));