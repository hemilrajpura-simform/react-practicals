import React, { useState } from 'react';

const AddTodos = (props) => {
    const [showAddTodos, setshowAddTodos] = useState(true);

    var curTitle;
    const setTitle = (event) => {
        curTitle = event.target.value;
    };

    const addTodoSubmithandler = (event) => {
        event.preventDefault();
        if (!curTitle) {
            alert("Title cannot be blank");
            return;
        }
        props.addTodo(curTitle);
        setshowAddTodos(() => { return (!showAddTodos); })
    }

    const cancelTodosHandler = (event) => {


        console.log('cancel todos');
        if (event.key === 'Escape') {
            console.log('escape key pressed 1');
            setshowAddTodos(() => { return (!showAddTodos); });
            console.log('escape key pressed 2');
        }

        if (event.key === 'Enter') {
            addTodoSubmithandler(event);
            setshowAddTodos(() => { return (!showAddTodos); });
            console.log('enter   key pressed 2');
        }
        
    };
    const keyPressHandler = (event) => {
        console.log('submit todos');
        setshowAddTodos(() => { return (!showAddTodos); });
    };
    return (
        <div className=''>
            <form>
                {!showAddTodos && (
                    <div className='addTodos-popup'>

                        <input
                            id='title'
                            type='text'
                            placeholder='Add Your Todo'
                            onKeyDown={cancelTodosHandler}
                            onChange={setTitle} autoFocus />
                    </div>
                )}
            </form>
            <div>
            {showAddTodos && (
                <div className='addTodos-main'>
                    <button onClick={keyPressHandler} className='addTodos-plus'>+</button>
                </div>)
                }
                </div>

        </div>

    )
};

export default AddTodos;