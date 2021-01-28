import { useState } from 'react';

import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

import hamburger from './images/hamburger.png';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
      
  const handleAddTodo = () => {
    setIsOpen(!isOpen);
  }

  const handleEditTodo = (id) => {
     setEditId(id);
  }

  return (
    <div className="App">
      <div className="nav">
            <p className="title">React Todo</p>
            <img className="hamburger" src={hamburger} alt="hamburger"></img>
      </div>
      <Todos handleAddTodo={handleAddTodo} handleEditTodo={handleEditTodo}/>
      {isOpen && <AddTodo editId={editId} setEditId={setEditId} handleAddTodo={handleAddTodo}/>}
    </div>
  );

}

export default App;
