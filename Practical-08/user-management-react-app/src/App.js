import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Header from './componenets/Header';
import {
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Signup />} />
        
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}


export default App;
