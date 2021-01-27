import { useState } from 'react';

import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

import hamburger from './images/hamburger.png';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
      
  const handleAddTodo = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <div className="nav">
            <p className="title">React Todo</p>
            <img className="hamburger" src={hamburger} alt="hamburger"></img>
      </div>
      <Todos handleAddTodo={handleAddTodo}/>
      {isOpen && <AddTodo setIsOpen={setIsOpen} handleAddTodo={handleAddTodo}/>}
    </div>
  );

}

export default App;
