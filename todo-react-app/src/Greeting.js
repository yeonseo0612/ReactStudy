import React, { useState } from 'react';
//함수형 컴포넌트의 정의
//컴포넌트의 이름을 정의할 때 대문자로 시작한다.
//let props = {name: "John"}

//이렇게 작성해도 된다
//props = {name: "홍길동"}
//let  {name} = props;
//구조분해할당
export function Greeting(props){ // (props = {}) 이런식으로 app.js 프롭스를 주지 않았을 경우 기본값 설정이 가능하다.
    //const {name : "김철수"} = props;
    //props에 값이 들어있으면 김철수는 무시하고 홍길동이 들어간다.
    //구조분해 할당에서 =은 대입연산자의 역할이 아니라 기본값을 표기하는 역할이다
    //{x = y} x에 값이 없으면 y를 넣는다는 조건부 대입


    
    //JSX 문법으로 HTML 조각을 반환할 수 있다.
    return (
    //하나의 루트요소만 반환할 수 있다.
    //여러 요솔르 반환할 때는 반드시 하나의 요소로 감싸야 한다.
    <div>
        <h1>Hello, {props.name}</h1>
        <h2>bye, {props.name}</h2>
    </div>
    )
    
}

//props = {name : "홍길동"} 
export function Farewell(props){

    const [name, setName] = useState(props.name);

    return(
            <div>
                 <h1>Goobye, {name}!</h1>    
            </div>
        ) 
}