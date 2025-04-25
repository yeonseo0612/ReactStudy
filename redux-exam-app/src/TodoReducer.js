const initialState = [];

let nextId = 1;

export const todoReducer = (state = initialState, action) => {  // 'action'이 두 번째 매개변수
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: nextId++, text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};