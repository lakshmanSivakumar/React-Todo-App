import React, {useState} from 'react';
import useForceUpdate from 'use-force-update';

import Todo  from './Todo';
import todos from '../todos.json';
import checkMark from '../images/check-mark.png';
import unCheckMark from '../images/uncheck-mark.png';

const Todos = ({handleAddTodo, handleEditTodo}) =>{

    const [src, setSrc] = useState(unCheckMark);

    const completed = [];

    const forceUpdate = useForceUpdate();

    const deleteTodo = (id) => {
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index,1);
        // console.log(todos);
        forceUpdate();
    }

    const editTodo = (id) => {
        handleAddTodo();
        handleEditTodo(id);
    }

    const completeTodo = (id) => {
        if(completed.indexOf(id) === -1) {
            document.querySelector(`[data-id="${id}"]`).querySelector('p').style.textDecoration = 'line-through';
            completed.push(id);
            setSrc(checkMark);
        }
        else {
            document.querySelector(`[data-id="${id}"]`).querySelector('p').style.textDecoration = 'none';
            completed.splice(completed.indexOf(id), 1);
            setSrc(unCheckMark);
        }
    }

    let html = todos.map(todo => <Todo key={todo.id} id={todo.id} content={todo.content} created_at={todo.created_at} src={src} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo}/>);
    
    return  (
        <div>
            <div className="addTodoBtnDiv">
                <button class="addTodoBtn" type="button" onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div className="container">
                {html}
            </div>
        </div>
    );
}

export default Todos