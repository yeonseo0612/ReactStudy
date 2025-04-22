import React, { useState } from 'react';
import {Button,Grid,TextField} from '@mui/material'

// const ShowHide = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(show => !show)}>
//         {show ? '숨기기' : '보이기'}
//       </button>
//       {show && <p>Hello, React</p>}
//     </div>
//   );
// };



//컴포넌트명은 Sol1

function Sol1(){
    const [ eating, SetEating] = useState(['초콜릿','사탕'])
    const[value, SetValue] = useState("");

    const inputHandler = (e) => {
        SetValue(e.target.value)
    }

    const clickHandler = () => {
        SetEating(prev => [value, ...prev])
    }
    return (
        <div>
            <input onChange={inputHandler} type="text"/>
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map((item,idx) =>(
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sol1;