import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {store} from './store'

function TodoApp() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const addTodo = () => {
    if(text.trim()){
      dispatch({type: 'ADD_TODO' , payload : text});
      setText('');
    }
  };

  const removeTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', payload: id});
  }

  return(
    <div>
      <h2>Todo List</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Add a new todo'/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button></li>
        ))}
      </ul>
    </div>

  )


}



function App() {



  return (
   <Provider store = {store}>
      <TodoApp />
   </Provider>
  );
}

export default App;
