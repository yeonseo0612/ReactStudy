import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Counter } from './UseState';
import ShowHide from './Eaxm';
import Cleanup from './UserEffect';
import {Count, InputSameple, UsePrevious, PreviousValue} from './UseRefEx';
import {useEffect } from 'react'; // useEffect 추가
import Sol1 from './Eaxm';
function App() {
  const [items, setItems] = useState([]); 
  const val = "apple";
  // ✅ 아이템 추가 함수
  const add = (newItem) => {
    setItems(prev => [...prev, newItem]);
    console.log("items : ", [...items, newItem]);
  };
  useEffect(() => {
    console.log("현재 아이템 목록:", items);
  }, [items]); // items가 변경될 때마다 실행됨

  return (
    <div className="App">
      {/* <ShowHide /> */}
      {/* <Sol1 /> */}
      {/* <Sol3 /> */}
      {/* 추가된 아이템 목록 출력
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> */}
      {/* <Count />
      <InputSameple /> */}
      <Cleanup value = {0} />
      {/* <TimerFunction /> */}
      {/* <UserList/> */}
  <PreviousValue />
    </div>
  );
}
export default App;
