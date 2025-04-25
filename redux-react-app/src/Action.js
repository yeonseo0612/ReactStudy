//액션 (action) : state를 변경하는 이벤트

//'INCREMMENT'라는 타입의 액션을 반환하는 함수
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
//이 함수들은 단순히 특정 타입을 가진 객체를 반환하는데, 이 객체는 REDUX
//리듀서에서 상태를 변경하기 위한 신호로 사용이 된다.
//type은 Redux 리듀서가 상태를 어떻게 변경하지 결정하는 기준이 된다.
//액션은 상태 변경을 하기 위한 이벤트이다.
export const setMessage = (message) => ({
    type: 'SET_MESSAGE',
    payload: message,
  });
  
  export const login = (name) => ({
    type: 'LOGIN',
    payload: name,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });