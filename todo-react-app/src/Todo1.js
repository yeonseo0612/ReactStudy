import React, {useState} from 'react'


//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자

// export function Todo(){

// }

let Todo1 = (props) => {
    const {item} = props;
    return (
        <div className="App">
          <h1>Todo List</h1>
              <input type="checkbox" id={item.id} />
              <label htmlFor={item.id}>{item.title}</label>
        </div>
        
      );
}

export default Todo1;
