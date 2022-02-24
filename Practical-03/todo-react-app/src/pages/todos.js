import React, { useEffect, useState } from 'react';
import AddTodos from '../components/addTodos';
import TodosList from '../components/todosList';

const Todos = () => {
    var initalList = [];
    /*  if (!localStorage.getItem("Todos") === null) {
        initalList = JSON.parse(localStorage.getItem("Todos"));
     } */
    //else{;}

    const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem("Todos")) || []);

    const localStorageExpiration = () => {
        localStorage.clear();
        setTodosList([]);
    }

    const addTodo = (title) => {

        const randKey = Math.random();
        var curDateObj = new Date();
        var curDate = curDateObj.getMinutes();

        const myTodo = { title: title, randKey: randKey, curDate: curDate, isTaskCompleted:false };
        console.log("CUR HOURS", curDate);


        setTodosList([...todosList, myTodo]);

        console.log(todosList);
    };

    //  setTimeout(localStorageExpiration,200000); 
    /*     const onDelete =(todo)=>{
            setTodosList(
                todosList.filter(
                    (e)=>{
                        return e !== todo;
                    }
                ));
            console.log('on delete', todosList);
            localStorage.setItem("Todos", JSON.stringify(todosList));
        }; */
    const onDelete = (todo) => {
        setTodosList(
            todosList.filter(
                (e) => {
                if(e === todo){
                        return (todo.isTaskCompleted = true )
                    }
                    else{
                        return(todo);
                    }
                }
            ));
        console.log('on delete', todosList);
        localStorage.setItem("Todos", JSON.stringify(todosList));
    };

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todosList));
    }, [todosList])


    return (
        <div>

            <TodosList
                todosList={todosList}
                localStorageExpiration={localStorageExpiration}
                onDelete={onDelete} />

            <AddTodos addTodo={addTodo} />

        </div>
    );

};

export default Todos;