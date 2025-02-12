/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을
 *                     가져오거나 설정할 때 호출되는 함수로 구성된
 *                     프로퍼티 ex) getter, setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

// 대문자로 시작하는 키워드는 생성자 or 클래스라고 유추할 수 있다.
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정하면
 *               프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을
 *                 사용 할 수 있으면 true를 반환.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 
 *                   여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이
 *                   금지된다. 단, writable이 ture인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin));

console.log('----------');

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
        // new Date().getFullYear() => 현재 년도를 알 수 있다.
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// yuJin2['height'] = 172;
// 위 식으로 프로퍼티를 추가하면 수정하기 불편

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: false,
})
// 위 함수로 프로퍼티 attribute로 섬세하게 설정가능
// attribute를 추가하지 않으면 기본값은 false
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('----------');
yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
yuJin2.height = 172;
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
 enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('----------')
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);
// enumerable을 false로 하여 열거가 불가능하게 할 수 있지만 값은 그대로 남아있다.

/**
 * Configurable
 */

Object.defineProperty(yuJin2, 'height',{
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });
Object.defineProperty(yuJin2, 'height',{
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
