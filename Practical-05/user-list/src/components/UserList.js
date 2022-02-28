import React, { useState } from 'react';
import UserItem from './UserItem';
import Header from './Header';
import { users } from '../data';
import './UserList.css';
const UserList = (props) => {
     const [showPopup, setShowPopup] =useState(false);

     const showPopupHandler = (id) => {
        setShowPopup(()=>!showPopup);
        console.log('show pop click',id);
     };


    return (
        <div className='main-container'>
            <div className='user-list-main'>
                <Header />
                {
                    users.map(item => (
                        <div key={item.userId} onClick={props.showPopupHandler}>
                        <UserItem
                            showPopupHandler={showPopupHandler}
                            username={item.username}
                            image={item.image}
                            email={item.email}
                            status={item.status}
                            access={item.access}
                            userId={item.userId}
                            id={item.userId}
                        />
                        </div>
                    ))
                }

            </div>
            {  showPopup && (
            <div className='userShow-main'>
                <img src='https://c8.alamy.com/zooms/9/f7da8fbeb118434a8f0775c49963b455/kf9bx5.jpg' />
                <h4>Leon Hunt</h4>
                <p>ullrich.owen@kristin.biz</p>
                <h3>Your Plan: Standard</h3>
                <button>Active User</button>
                <h5>Plan Uses</h5>
                <div className='plan-uses-line'> </div>
                <div className='plan-uses-line-front'> </div>
                <div className='statistic-main'>
                    <div className='reviewed'>
                    <h2>2,450</h2>
                    <p>clicks reviewed</p>
                    </div>
                    <div className='statistic-line'></div>
                    <div className='clicks'> 
                    <h2>5,000</h2>
                    <p>Monthly clicks</p>
                    </div>
                </div>
            </div> )}
        </div>

    );
};

export default UserList;