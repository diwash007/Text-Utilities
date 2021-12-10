// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import Alert from './components/Alert';

function App() {
  let theme = localStorage.getItem('mode');
  if(theme == null) theme = 'light';
  const [mode, setMode] = useState(theme); // dark mode enabled or not
  if(mode === 'dark')
    document.body.style.background = "#494f55";
  else
    document.body.style.background = "white";
    

	// const [red, setRed] = useState('light');
  const [alert, setAlert] = useState(null);

	// for alert
  const showAlert = (message, type) => {
    setAlert({
			msg: message,
			type: type,
		});
		setTimeout( () => {
			setAlert(null);
		}, 2000);
  }

	// for dark mode
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = "#494f55";
      localStorage.setItem('mode', 'dark');
    }
    else{
      setMode('light');
      document.body.style.background = "white";
      localStorage.setItem('mode', 'light');
    }
  }

	// for red mode
	// const redMode = () => {
  //   if(red === 'light') {
  //     setRed('red');
  //     document.body.style.background = "red";
  //   }
  //   else{
  //     setRed('light');
  //   }
  // }


  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
