import React, {useState} from 'react';

import todos from '../todos.json';
import checkMark from '../images/check-mark.png';

const AddTodo = ({handleAddTodo, editId, flagEdit, setFlagEdit}) => {

    const [newTodo, setNewTodo] = useState('');

    if(editId)
        setFlagEdit(1);
    
    const handleOnChange = (e) => {
        setNewTodo(e.target.value.trim());
    }

    const handleAdd = () => {
        if(newTodo === '')
            alert('Please enter a valid text');
        else {
            const now = new Date();
            const newTodoObj = {
                id: todos.length+1,
                content: newTodo,
                created_at: String(now),
                src: checkMark,
                checked: 0
            }
            todos.push(newTodoObj);
            handleAddTodo();
        }
    }
    
    const handleEdit = (e) => {
        const now = new Date();
        let index = todos.findIndex(todo => todo.id === editId);
        if(e.target.previousElementSibling.value.trim() === '')
            alert('Please enter a valid text');
        else {
            todos[index].content = e.target.previousElementSibling.value.trim();
            todos[index].created_at = String(now);
        }
    }

    return (
        <div className="popUpBox">
            <div className="box">
                <span className="popUpClose" onClick={handleAddTodo}>x</span>
                <form>
                    <input className="input" type="text" placeholder="Enter your Todo" required onChange={handleOnChange}></input>
                    {!flagEdit && <button className="add" type="submit" onSubmit={handleAdd}>Add</button>}
                    {editId && <button className="editBtn" type="submit" onSubmit={handleEdit}>Edit</button>}
                </form>
            </div>         
        </div>
    )
}

export default AddTodo
