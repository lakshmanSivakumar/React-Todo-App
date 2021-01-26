import React from 'react';

import trash from '../images/trash.png'
import edit from '../images/edit.png'
import checkMark from '../images/check-mark.png'

const Todo = ({content,time}) =>{
    return  (
        <div className="todo">
            <div className="content">
                {content}
                <img className="trash" src={trash} alt="trash"></img>
            </div>
            <div className="createdAt">
                {time}
                <img className="edit" src={edit} alt="edit"></img>
            </div>
            <div className="checkMarkDiv">
                <img className="checkMark" src={checkMark} alt="check-mark"></img>
            </div>
        </div>
    );
}

export default Todo



