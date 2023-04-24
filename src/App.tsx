import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import MyButton from "./components/Button/Button"

function App() {
  return (
    <div className="App">
      <MyButton variant="outlined"  >submit</MyButton>
    </div>
  );
}

export default App;
