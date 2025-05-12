//라이트 모드와 다크모드의 변경
//현재 테마 값이랑 테마를 바꿔주는 버튼 표시
//버튼 클릭시 toggleTheme 호출

import { useContext } from "react";
import { ThemeContext } from "../context";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Settings</h2>
      <p>Current Theme : <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Settings;