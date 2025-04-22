// import React, {useState} from 'react'
// import {ListItem, ListItemText, InputBase, CheckBox} from '@mui/material'

// //현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자

// // export function Todo(){

// // }

// let Todo = (props) => {
//     const {items} = props;
//     return (
//         <div className="App">
//           <h1>Todo List</h1>
//           {items.map((item) => (
//             <div key={item.id}>
//               <input type="checkbox" id={item.id} />
//               <label htmlFor={item.id}>{item.title}</label>
//             </div>
//           ))}
//         </div>
//       );

// }

// // const Todo = (props) => {
// //     const [item, setItem] = useState(props.item);
// //     return(
// //         <ListItem>
// //         <Checkbox checked={item.done}/>
// //         <ListItemText>
// //             <InputBase 
// //                 inputProps={{"aria-label" : "naked"}}
// //                 type="text"
// //                 id={item.id}
// //                 name={item.id}
// //                 value={item.title}
// //                 multiline={true}
// //                 fullWidth = {true}
// //             />
// //         </ListItemText>
// //     </ListItem>
// //     );
// // };


// export default Todo;

import React, {useState} from "react";

import {ListItem,ListItemText,InputBase,Checkbox, listItemSecondaryActionClasses, IconButton, ListItemSecondaryAction} from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline'
//ListItem 내부에서 텍스트나 아이콘 이후에 보조 액션 영역을 오른쪽 끝에 고정배치해준다.
//반드시 ListItem의 자식으로만 사용해야한다.

//IconButton
//아이콘을 클릭 가능한 버튼으로 만들어주는 컴포넌트이다.

//DeleteOutlined
//MUI아이콘 라이브러리에 포함된 휴지통 아이콘 컴포넌트이다.

//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자.
const Todo = (props) => {
    
    const editEventHandler = (e) => {
        item.title = e.target.value
    }
    const[item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    //true -> false로 바꾸는 turnOffReadOnly함수 추가

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        setReadOnly(true);
    }

    //삭제함수
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    }






    //변경을 감지하는 함수
    const handleChange = (e) => {
        setItem({
            ...item,
            title:e.target.value})        
    }

    //체크박스 변경함수
    const checkBoxEventHandler = (e) => {
        item.done = e.tart.Checked;
        editItem();
    }
   

    return(

        //html코드가 들어가는 부분

        <ListItem>
        <Checkbox checked={item.done} onChange  />
        <ListItemText>
            <InputBase 
                inputProps={{"aria-label" : "naked"}}
              
                onClick={turnOffReadOnly}
                onChange={editEventHandler}
                onKeyDown={turnOnReadOnly}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth = {true}
            />
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}> 
                <DeleteOutline />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
};

export default Todo;
