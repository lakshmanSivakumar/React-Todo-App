import { useState } from 'react';

import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

import hamburger from './images/hamburger.png';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [flagEdit, setFlagEdit] = useState(0);
      
  const handleAddTodo = () => {
    setIsOpen(!isOpen);
    setFlagEdit(0);
    setEditId(null);
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
      {isOpen && <AddTodo handleAddTodo={handleAddTodo} editId={editId} setEditId={setEditId} flagEdit={flagEdit} setFlagEdit={setFlagEdit}/>}
    </div>
  );

}

export default App;
