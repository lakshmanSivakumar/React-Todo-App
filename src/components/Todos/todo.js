import React from 'react';



const Todo = ({content,time}) =>{
    return(
        <div className="todo">
            <div className="content">
                {content}
            </div>
            <div className="time">
                {time}
            </div>
            <div className="actions">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
                <button className="completed">Mark as complete</button>
            </div>
        </div>
    )
}

export default Todo



