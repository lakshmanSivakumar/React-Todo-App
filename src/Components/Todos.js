import React from 'react';
import useForceUpdate from 'use-force-update';

import Todo  from './Todo';
import todos from '../todos.json';

const Todos = ({handleAddTodo, handleEditTodo}) =>{

    const forceUpdate = useForceUpdate();

    const deleteTodo = (id) => {
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index,1);
        console.log(todos);
        forceUpdate();
    }

    const editTodo = (id) => {
        handleAddTodo();
        handleEditTodo(id);
    }

    let html = todos.map(todo => <Todo key={todo.id} id={todo.id} content={todo.content} created_at={todo.created_at} deleteTodo={deleteTodo} editTodo={editTodo}/>);
    
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