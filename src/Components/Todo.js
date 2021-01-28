import React from 'react';

import todos from '../todos.json';

import trash from '../images/trash.png';
import edit from '../images/edit.png';
import checkMark from '../images/check-mark.png';

const Todo = ({id, content, created_at, deleteTodo, editTodo}) =>{

    return  (
        <div className="todo">
            <div className="content">
                {content}
                <img className="trash" src={trash} alt="trash" onClick={() => deleteTodo(id)}></img>
            </div>
            <div className="createdAt">
                {created_at}
                <img className="edit" src={edit} alt="edit" onClick={() => editTodo(id)}></img>
            </div>
            <div className="checkMarkDiv">
                <img className="checkMark" src={checkMark} alt="check-mark"></img>
            </div>
        </div>
    );
}

export default Todo



