// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
			msg: message,
			type: type,
		});
		setTimeout( () => {
			setAlert(null);
		}, 2000);
  }

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
    <Alert alert={alert} />
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
