// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light'); // dark mode enabled or not
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = "#494f55";
    }
    else{
      setMode('light');
      document.body.style.background = "white";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </>
  );
}

export default App;
