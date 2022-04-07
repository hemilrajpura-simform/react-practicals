import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import Header from './Header';
// import { Users } from '../Data';  //Practical-5
import PageNotFound from './PageNotFound';
import './UserList.css';
import Popup from './Popup';
import Loading from './Loading';
import { Moon, Sun } from 'react-feather';


const UserList = (props) => {
    console.log();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [pageFound, setPageFound] = useState(false);
    const [pageLoading, setPageLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  
    const paginationHandler = (number) => {
        if (number === "plus") {
            
            setCurrentPage(() => { return currentPage + 1 });
            return;
        }
        else if (number === "minus") {
            setCurrentPage(() => { return currentPage - 1 })
            return;
        }
        else if (number === "reload") {
            setCurrentPage(1);
            return;
        }
        setCurrentPage(number);
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {


        const f = async () => {
            setPageLoading(true);
            const res = await fetch("https://reqres.in/api/users?page=" + currentPage.toString());
            const json = await res.json();
            setUsers(json.data);
            setPageLoading(false);
        };

        const pageFoundHandler = () => {
            if (users.length !== 0) {
                setPageFound(true);
            }
            else {
                setPageFound(false);
            }

        };
        f();
        pageFoundHandler();


    }, [currentPage, users.length]);


    const closePopup = () => {
        setShowPopup(false);
    };
    const showPopupHandler = (item) => {
        setShowPopup(true);
        setSelectedUser(item);
    };

    const paginationStyle = {
        outline: "2px solid black",
    };
    
   
    return (
    
        pageLoading ? <Loading /> :
            !pageFound ? <PageNotFound paginationHandler={paginationHandler} /> : (
                <div >
                <div className='main-container' style={ props.darkMode ? props.darkModeStyle:null } onMouseLeave={closePopup}>
                    <div className='user-list-main' style={ props.darkMode ? props.darkModeStyle:null }>
                       <div className='darkMode-main'>
                        <button onClick={props.darkModeHandler} id="darkMode-btn"> 
                        { props.darkMode ? <Sun /> : <Moon /> }
                        
                        </button>
                        </div> 
                        <Header />
                        {
                            users.map(item => (
                                <div key={item.id} style={ props.darkMode ? props.darkModeStyle:null } >
                                    <UserItem
                                        showPopupHandler={showPopupHandler}
                                        username={item.first_name + " " + item.last_name}
                                        image={item.avatar}
                                        email={item.email}
                                        status={item.status}
                                        access={item.access = "Read"}
                                        userId={item.id}
                                        id={item.id}
                                        closePopup={closePopup}
                                    />
                                </div>
                            ))
                        }


                        <div className='pagination'>
                            <button
                                onClick={() => paginationHandler("minus")}> {"<"} </button>
                            <button
                                style={currentPage === 1 ? paginationStyle : null}
                                onClick={() => paginationHandler(1)}>1</button>

                            <button
                                style={currentPage === 2 ? paginationStyle : null}
                                onClick={() => paginationHandler(2)}>2</button>
                            <button
                                onClick={() => paginationHandler("plus")} > {">"} </button>
                        </div>
                    </div>

                    {showPopup && (
                        <div className='userShow-main'>


                            <Popup
                                className='popup-main'
                                selectedUser={selectedUser} />

                        </div>

                    )}
                </div>
                </div>
            )
    );
};

export default UserList;