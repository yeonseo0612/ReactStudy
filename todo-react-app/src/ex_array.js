let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

console.log("hi");

let iarr = [10, '안녕', 1.32, true, null, undefined, {name : 'Alice', age: 30}, function(){console.log('hi'),  console.log('arrow') }, [10,20]]; //정수 문자 실수 등 다 가능


let student = [{name:'홍길',age:30}, {name:'밥', age:50}]

student[0] //-> 객체
student[0].name //-> '홍길'

let fArr = [function(){console.log('일반함수');  return '👋 함수 실행 완료!';} ]

//배열에 들어가있는 함수의 호출
console.log(`fArr호출 : ${fArr[0]()}`)

let obj = [{name : '홍', greeting : function(){ return 'h1'}}]

console.log(obj[0].greeting());

//자바 클래스 -> 객체
//js에서는 클래스 없이 객체를 직접 만들 수 있다.

//자바에서 클래스를 먼저 만듦
//필드


//js에서는 key - value로 구성된 프로퍼티의 집합
//프로퍼티의 value로 함수가 올 수도 있는데, 이러한 함수를 메서드라고 한다.

//1. 객체 리터럴
//가장 간단하고 직관적인 방법

//public class Person{ String name; int age;}
//main(){ Person p = new Person(); p.name = "김기리"; p.age = 30;}
//js는 java의 일련의 과정을 생략하고 객체 생성 및 값 할당 가능
const person = {name :'김기리' , age: 30, greeting : function(){ console.log(`안녕나는 ${this.name}이야`)}, sayBye(){console.log('잘가라')}} //배열 [] 객체 {}

console.log(person.name);
console.log(person.age);
person.greeting();
person.sayBye();

//2. new Object() 생성자 사용하기
//js의 내장 생성자인 Object를 호출해 빈 객체를 만든 뒤 프로퍼티를 추가하는 방식

const obj_1 = new Object();

obj_1.x = 10; //프로퍼티를 추가
obj_1.y = 20;

//3. 생성자 함수(Constructor Function)
function User(name,age){
    this.name = name;
    this.age = age;
}
const user = new User('구김김', 30);

console.log(user.name);
console.log(user.age);

//함수
//자주 사용하는 코드를 하나로 모아서 언제든 호출해서 사용할 수 있도록 만들어 놓은 것

//function 함수명(매개변수){
//  기능
//  return 반환할 값
//}

//함수의선언
//메모리에 square 함수를 올리겠다.
//매개변수 : 함수 외부와 내부를 연결하는 변수
//함수를 호출하면서 전달받은 값은 함수내부로 전달
function square(x){
    let result = x*x;

    return result;
    //return이 있어야 함수 밖으로 결과를 빼서 호출할 수 있다.
}
//함수의 호출
console.log(square(6));


//배열을 매개변수로 받는 경우
function sum(arr){
    let total =0;
    for(const num of arr){
        total += num;
    }
    return total;
}

const nums = [1,2,3,4,5];
console.log(sum(nums));

//구조분해 할당으로 나눠서 받기
//[a,b,c,d,e] = numms
function apart([a,b,c,d,e]){
    console.log('첫째 : ', a);
    console.log('둘째 : ', b);
    console.log('셋째 : ', c);
    console.log('넷째 : ', d);
    console.log('다섯째 : ', e);

}

//객체를 매개변수로 받기
function introduce(user){
    console.log(`안녕 나는 ${user.name}이고, 나이는 ${user.age}다`)
}
const user_2 = {name: '홍길동', age: 30};
introduce(user_2);

//let name = user.name;
//let age = user.age;
//객체의 구조분해 할당
let {name, age} = user;

//props : react에서 제공하는 객체
//컴포넌트에서 전달받은 내용을 프로퍼티로 저장한다.
// function f(props){
//     props.name
// }
// <Greeting name ="John"/>

// console.log(f())

// funtion introduce(users){
//     //users베열에는 user객체들이 들어있다
//     //foreach()로 하나씩 꺼내서 구조분해할당을 진행한다.
//     users.foreach(({name, age}) => {
//         console.log(`안녕 나는 ${name}이고, 나이는 ${age}다`)
//     })
// }

const obj_4 = {factor : 10};
//화살표함수와 this
//화살표함수는 (() => {})는 자신의 this를 갖지 않고
//선언된 외부의 this를 그대로 사용한다.


//배열메서드
//배열의 순회, 변환, 집계, 변경 등 다양한 목적의 내장 메서드가 있다.
//순회(Iteration)
[1,2,3].forEach(x => { console.log(x * this.factor)}, obj_4)//thisArg가 있어도 this는 외부의 this를 그대로 사용

//forEach(callback,[, thisArg])
//배열의 각 요소에 대해 콜백함수를 실행한다.

//callback : 각 요소에 대해 실행할 함수
//[, thisArg] : callback을 실행할 때 this로 사용할 값
//배열의 각 요소에 대해 콜백함수를 실행한다.

//변환(Transfromation)
//map(callback[, thisArg])
//각 요소를 콜백 함수로 변환한 새 배열을 반환
const num = [1,2,3];

const doubled = num.map(x => x*2);
console.log(doubled);

//flat ([depth])
//중첩 배열을 주어진 깊이만큼 평탄화
const nested = [1,[2,[3,4]]];
console.log(nested.flat());
console.log(nested.flat(2));

//필터링(Filtering)
//filter(callback)
//결과가 true인 요소만 모아 새 배열로 반환
const evens = num.filter(n => n % 2 == 0);
console.log(evens);

//집계
//reduce(callback, initialValue)
//배열을 순회하며 누적 결과를 생성한다.
const iArr = [1,2,3,4,5]
const sum_d = iArr.reduce((acc,cur) => acc+cur,0);

console.log(sum_d)