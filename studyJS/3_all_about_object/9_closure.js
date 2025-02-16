/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 * environment with in which that fuction was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * => "상위 함수보다 하위 함수가 더 오래 살아있는 경우는 closure라고한다."
 * 
 */
function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number); => err;

console.log(getNumber());

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());
// return 함수 반환할때 () 안붙여서 실행하지 않고
// 밖에서 선언해주면
// innerGetNumber()보다 getNumber()가 더 빨리 닫힌다.
// => "상위 함수보다 하위 함수가 더 오래 살아있는 경우는 closure라고한다."


/**
 * 주로 쓰는 곳
 * 
 * 1) 데이터 캐싱
 */

function cacheFunction() {
    // 아래 계산은 매우 오래걸린다는 가정
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

// number의 값이 계산하는데 매우 오래걸린다는 가정하에
// 첫 실행으로 한번만 계산해놓고
// cacheFunction을 다시 실행하여 number 계산을 반복하지 않고
// 이후 innerCacheFunction 안에서만 계산이 이루어져
// 계산이나 처리과정을 최적화 시킬 수 있다.

console.log('---------------------');

function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();

console.log(runner3());
console.log(runner3());
console.log(runner3());

// cacheFunction2를 첫 실행 후 실행하지 않고
// increment가 number값을 기억하고 있게 한다.

/**
 * 3) 정보 은닉
 */
console.log('----------------');
function Idol(name, year){
    this.name = name;

    var _year = year;
    // this 키워드로 생성하지 않았으므로 밖에서 접근 불가

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);