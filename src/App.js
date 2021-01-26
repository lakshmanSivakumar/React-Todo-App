import Todos from './components/Todos/index'
import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const addTodo = () =>{
    let App = document.getElementsByClassName('App');
    App.classList.toggle('.modal')
  }
  return (
    <div className="App">
      <nav className="navbar">
            <div className="nav-brand">
                T
            </div>
            <div className="nav-title">
                Prem Todo
            </div>
      </nav>
      <Todos/>
      <button class="add-todo" onClick={addTodo}>ADD TODO</button>  
    </div>
  );
}

export default App;
