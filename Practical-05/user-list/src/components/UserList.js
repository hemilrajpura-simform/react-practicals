import React, { useState } from 'react';
import UserItem from './UserItem';
import Header from './Header';
import { users } from '../data';
import './UserList.css';
import Popup from './Popup';

const UserList = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const closePopup = () => {
          setShowPopup(false);
    };
    const showPopupHandler = (item) => {
        setShowPopup(true);
        setSelectedUser(item);
        console.log('item obj', selectedUser);
    };


    return (
        <div className='main-container' onMouseLeave={closePopup}>
            <div className='user-list-main'>
                <Header />
                {
                    users.map(item => (
                        <div key={item.userId} >
                            <UserItem
                                showPopupHandler={showPopupHandler}
                                username={item.username}
                                image={item.image}
                                email={item.email}
                                status={item.status}
                                access={item.access}
                                userId={item.userId}
                                id={item.userId}
                                closePopup={closePopup}
                            />
                        </div>
                    ))
                }

            </div>

            {showPopup && (
                <div className='userShow-main'>

                    <Popup selectedUser={selectedUser} />

                </div>

            )}
        </div>

    );
};

export default UserList;