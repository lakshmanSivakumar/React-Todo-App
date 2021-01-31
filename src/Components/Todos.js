import React from 'react';
import useForceUpdate from 'use-force-update';

import Todo  from './Todo';
import todos from '../todos.json';
import checkMark from '../images/check-mark.png';
import unCheckMark from '../images/uncheck-mark.png';

const Todos = ({handleAddTodo, handleEditTodo}) =>{

    const forceUpdate = useForceUpdate();

    const deleteTodo = (id) => {
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index,1);
        forceUpdate();
    }

    const editTodo = (id) => {
        handleAddTodo();
        handleEditTodo(id);
    }

    const completeTodo = (id) => {
        todos.forEach(todo => { 
            if(todo.id === id) {
                if(!todo.checked) {
                    document.querySelector(`[data-id="${id}"]`).querySelector('p').style.textDecoration = 'line-through';
                    todo.src = unCheckMark;
                    todo.checked = 1;
                }
                else {
                    document.querySelector(`[data-id="${id}"]`).querySelector('p').style.textDecoration = 'none';
                    todo.src = checkMark;
                    todo.checked = 0;
                }
                forceUpdate();
            }
        });
    }

    let html = todos.map(todo => <Todo key={todo.id} id={todo.id} content={todo.content} created_at={todo.created_at} src={todo.src} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo}/>);
    
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