import React, {useState} from 'react';
import '../index.css';

const AddTodosPopUp = () => {
    const [showAddTodos, setshowAddTodos] = useState(false);
    const addTodosHandler = () => {
        console.log('add todos');
        setshowAddTodos(()=>{ return ( !showAddTodos ); });
    };
return(
<div>
<div className='addTodos-popup'> 
            <button onClick={addTodosHandler} >close</button>
            </div>
</div>
);

};

export default AddTodosPopUp;