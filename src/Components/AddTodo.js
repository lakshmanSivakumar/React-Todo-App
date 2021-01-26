import React from 'react'

const AddTodo = ({handleAddTodo}) => {
    return (
        <div className="popUpBox">
            <div className="box">
                <span className="close" onClick={handleAddTodo}>x</span>
                <input className="input" type="text" placeholder="Enter your Todo" required></input>
                <button className="add" type="button">Add</button>
            </div>         
        </div>
    )
}

export default AddTodo
