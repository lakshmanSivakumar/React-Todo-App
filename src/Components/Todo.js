import React from 'react';

import trash from '../images/trash.png';
import edit from '../images/edit.png';


const Todo = ({id, content, created_at, src, deleteTodo, editTodo, completeTodo}) =>{

    return  (
        <div className="todo" data-id={id}>
            <div className="content">
                <p>{content}</p>
                <img className="trash" src={trash} alt="trash" onClick={() => deleteTodo(id)}></img>
            </div>
            <div className="createdAt">
                <p>{created_at}</p>
                <img className="edit" src={edit} alt="edit" onClick={() => editTodo(id)}></img>
            </div>
            <div className="checkMarkDiv">
                <img className="checkMark" src={src} alt="check-mark" onClick={() => completeTodo(id)}></img>
            </div>
        </div>
    );
}

export default Todo



