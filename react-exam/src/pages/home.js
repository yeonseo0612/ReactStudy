import React, { useContext } from 'react';
import { ThemeContext } from '../context'; 

const Home = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div style={{ padding: '1rem' }}>
        <h1>Welcome to My React Dashboard</h1>
        <p>Current Theme: <strong>{theme}</strong></p>
      </div>
    );
  };
  
  export default Home;