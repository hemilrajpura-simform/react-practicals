

import React from 'react';
import './UserList';

const Popup = (props) => {
    console.log('inside popup Component', props.selectedUser.username);
    //const planUsesStyle = 'width:'+props.selectedUser.planUses;
    const planUsesStyle = {
        width: props.selectedUser.planUses + '%'
    };
    return (
        <div>

            <img src={props.selectedUser.image} alt='' />
            <h4>{props.selectedUser.username} </h4>
            <p>{props.selectedUser.email}</p>
            <h3>Your Plan: Standard</h3>
            <button>Active User</button>
            <h5>Plan Uses</h5>
            <div className='plan-uses-line' style={planUsesStyle}> </div>
            {/* <div className='plan-uses-line-front'> </div> */}
            <div className='statistic-main'>
                <div className='reviewed'>
                    <h2>{props.selectedUser.clicksReviewed}</h2>
                    <p>clicks reviewed</p>
                </div>
                <div className='statistic-line'></div>
                <div className='clicks'>
                    <h2>{props.selectedUser.MonthlyClicks}</h2>
                    <p>Monthly clicks</p>
                </div>
            </div>

        </div>
    );
};
export default Popup;