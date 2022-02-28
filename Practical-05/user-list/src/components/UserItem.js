import React from 'react';
import './UserItem.css';
import { Trash, Lock } from 'react-feather';
import { ChevronDown } from 'react-feather';
const UserItem = (props) => {

    // const showPopupHandler = (event)=>{
    //     console.log('key cliked',event.target.value);
    // }
    return (
        <div onClick={()=>{props.showPopupHandler(props.id)}} className='user-item-main'>
            <ul>
                <li className='image-username'>
                    <div>
                        <img
                            src={props.image}
                            alt={props.username} /> </div>
                    <div>
                        <p className='user-name'>{props.username}</p>
                        <p className='email'>{props.email}</p>
                    </div>
                </li>
                <li> {props.status ?
                    <p className='active'>Active</p> : (<p>Inactive<ChevronDown /></p>)}</li>
                <li className='access-icon'>
                    <div> <p>{props.access}</p> </div>
                    <div><p>
                        {
                            props.access === 'Owner' ? <Lock /> : <Trash />
                        }
                    </p>
                    </div>
                </li>

            </ul>

        </div>
    );
};

export default UserItem;