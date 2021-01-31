import { useState } from 'react';

import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Menu from './Components/Menu'

import hamburger from './images/hamburger.png';
import close from './images/close.png'
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [flagEdit, setFlagEdit] = useState(0);
  const [isClose, setIsClose] = useState(true);
  const [hamburgerSrc, setHamburgerSrc] = useState(hamburger);
      
  const handleAddTodo = () => {
    if(!isClose) {
      setHamburgerSrc(hamburger);
      setIsClose(!isClose);
    }
    setIsOpen(!isOpen);
    setFlagEdit(0);
    setEditId(null);
  }

  const handleEditTodo = (id) => {
     setEditId(id);
  }

  const handleHamburger = (isClose) => {
    if(isClose)
      setHamburgerSrc(close);
    else
      setHamburgerSrc(hamburger);
    setIsClose(!isClose);
  }

  return (
    <div className="App">
      <div className="nav">
        <p className="title">React Todo</p>
        <div className="desktopMenu">
          <p>All Todos</p>
          <p>Completed Todos</p>
          <p>Today's Todos</p>
          <p>Login</p>
        </div>
        <img className="hamburger" src={hamburgerSrc} alt="hamburger" onClick={() => handleHamburger(isClose)}></img>
      </div>
      <Todos handleAddTodo={handleAddTodo} handleEditTodo={handleEditTodo}/>
      {isOpen && <AddTodo handleAddTodo={handleAddTodo} editId={editId} flagEdit={flagEdit} setFlagEdit={setFlagEdit}/>}
      {!isClose && <Menu/>}
    </div>
  );

}

export default App;
