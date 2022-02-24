import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
const todosList = (props) => {

    var curDateObj = new Date();
    var curDate = curDateObj.getMinutes();

    return (
        <div className='todolist-main'>
            <h2 className="todolist-title">Todos List</h2>
            <div className='todolist'>
                {props.todosList.length === 0 ? <span>No Todos to display</span>
                    : props.todosList.map((todo) => {

                        if (todo.curDate !== curDate) {
                            props.localStorageExpiration();
                            console.log('cleared');
                        }
                        var completedStyle = todo.isTaskCompleted ? "completedstyle" : ''; 
                        var completedStyleCross = todo.isTaskCompleted ? 'todo-cross-green' : 'todo-cross';
                        return (
                            <div className='todolist-item' key={props.randKey}>
                                {
                                    <h3 className={completedStyle} >
                                        {todo.title}
                                    </h3>
                                }
                     
                                <CheckBoxIcon className={completedStyleCross} 
                                onClick={() => {
                                    props.onDelete(todo)
                                }} />

                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};

export default todosList;