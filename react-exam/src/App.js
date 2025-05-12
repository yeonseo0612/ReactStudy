import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context'; // ThemeContext import

import Home from './pages/home';
import Posts from './pages/posts';
import Settings from './pages/setting';
import NavBar from './navigation/navigation'

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  // 스타일 객체를 테마에 따라 다르게 설정
  const style = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333', // 다크모드와 라이트모드 배경색
    color: theme === 'light' ? '#000000' : '#ffffff', // 글자 색상
    minHeight: '100vh', // 화면을 꽉 채우도록 설정
    transition: 'all 0.3s ease', // 부드러운 전환 효과 추가
  };

  return (
    <div style={style}>
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;