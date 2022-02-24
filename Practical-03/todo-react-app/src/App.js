import { Component } from 'react';
import Header from './components/header';
import './index.css';
import Todos from './pages/todos';

class App extends Component {

render(){
  return (
    <div className='app-main' >
      <Header />
      <Todos /> 
    </div>
  );
  }
}

export default App;
