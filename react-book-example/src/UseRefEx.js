import {useRef} from 'react'
import { useEffect, useState } from 'react';
//useRef() 훅
//변경가능한 객체 하나를 생성을 해준다.
//반환된 객체는 {current : 값}형태이고, 컴포넌트의 전체 생명주기 동안 같은 객체를 유지한다.
//변경가능한 객체 하나를 생성을 해준다.
// const refContainer = useREF(0);
// const refContainer = {current : 0};

//주요특징
//1. 값저장
//렌더링 사이에 값을 기억해두고 싶을 때 사용한다.
//값이 바뀌어도 리렌더링을 발생시키지 않는다.

//2.DOM 접근
//JSX로 작성한 요소를 ref속성으로 연결해주면, 해당 DOM 노드에 직접 접근할 수 있다.

export const Count = () => {
        const countRef = useRef(0);

        const onClick = () => {
            countRef.current += 1;
            console.log(`현재 카운트 : ${countRef.current}`)
        }

        return(
            <div>
                <h1>{countRef.current}</h1>
                <button onClick={onClick}>증가</button>
            </div>
        )
}

//DOM 접근 예시

export const InputFoucs = () => {
    //inputEl = {current : null};
    const inputEl = useRef(null);
    
    useEffect(() => {
        //화면에 렌더링 되면 input태그에 foucs를 줘서 바로 입력할 수 있게 하고싶어.
            inputEl.current.focus();
    },[])

    return(
        <div>
            <input ref={inputEl} placeholder='여기에 입력해 보세요'/>
        </div>
    )
}

//InputSameple
//이름과 닉네임을 입력하는 필드를 ㅁ나든다.
//이름과 닉네임을 입력하면 밑에 띄운다.
//초기화 버튼을 만들고 버튼을 누를시 이름 입력필드에 포커스가 가도록 만들기

export const InputSameple = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef(null);

    const { name, nickname } = inputs;

    const onChnge = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        if (nameInput.current) {    // null 체크
            nameInput.current.focus();
        }
    };


    return(
        <div>
            <div>
                <label>이름 : </label>     
                <input name ="name" onChange={onChnge} value={name}  ref={nameInput}></input>
            </div>
            <div>
                <label>닉네임 : </label>
                <input  name ="nickname" onChange={onChnge} value={nickname}></input>
            </div>
            <div>
                <b>입력값 :</b> {name} ({nickname})
            </div>
            <button onClick={onReset}>초기화</button>
        </div>

    )
}

//숫자를 증가시키면서 이전값과 현재값을 화면에 표시하는 에제

const usePrevious = (value) => {
    const prevRef = useRef;

    useEffect(() => {
        prevRef.current = value; //최신value를 저장
    },[value])
    return prevRef.current;
} 

export const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count); //이전값을 저장

    return(
        <div>
            <h2>현재값 : {count}</h2>
            <h3>이전값 : {prevCount !== undefined ? prevCount : '없음'}</h3>
            <button onClick={() => setCount(c => c + 1)}>증가({count})</button>
        </div>
    )
}