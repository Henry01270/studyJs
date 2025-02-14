/**
 * Scope
 */
var numberOne = 20;
function levelOne(){
    console.log(numberOne);
}

// levelOne();

function levelOne(){
    var numberOne = 40;

    console.log(numberOne);
}

// levelOne();

console.log(numberOne);

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;
        
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numebrOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numebrTwo);

/**
 * 중요***
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행된 위치가 상위 스코프를 정한다.
 * 
 * javascript는 Lexical Scope임
 */
var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}
functionOne();

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);

// var이 아닌 let, const를 사용하면 
// 함수 뿐 아니라 for, if, while Loop같은
// block level scorp에도 lexical scorp가 적용된다
i = 999;
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */