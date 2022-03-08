import './App.css';
import UserList from './components/UserList';
import {  useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(() => { return !darkMode });
    console.log(darkMode);
  };

  const darkModeStyle = {
    backgroundColor: "#202a2a",
    color:"white"
};

const darkModeStylePopUp = {
  color:"black"
};


  return (
    <div className="App" style={ darkMode ? darkModeStyle:null }>
      <UserList darkMode={darkMode} darkModeStylePopUp={darkModeStylePopUp} darkModeStyle={darkModeStyle} darkModeHandler={darkModeHandler} />
    </div>
  );
}

export default App;
