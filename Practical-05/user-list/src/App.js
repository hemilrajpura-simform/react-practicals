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

const darkModeStyleBody = {
  backgroundColor: "#121e1e",
};


  return (
    <div className="App" style={ darkMode ? darkModeStyle:null }>
      <UserList darkMode={darkMode} darkModeStyle={darkModeStyle} darkModeHandler={darkModeHandler} />
    </div>
  );
}

export default App;
