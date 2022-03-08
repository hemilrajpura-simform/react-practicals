import React from 'react';
import './UserItem.css';
import { Trash, Lock, ChevronDown } from 'react-feather';
import LazyLoad from "react-lazyload";

const UserItem = (props) => {

    return (
        <div onMouseEnter={() => {
            props.showPopupHandler(props)
        }}
            
            className='user-item-main'>
            <ul>
                <li className='image-username'>
                    <div>
                    {/* <LazyLoad once> */}
                        <img
                            src={props.image}
                            alt={props.username} />
                            {/* </LazyLoad> */}
                             </div>
                    <div>
                        <p className='user-name'>{props.username}</p>
                        <p className='email'>{props.email}</p>
                    </div>
                </li>
                <li> {props.status ?
                    <p className='active'>Active</p> : (<p>Inactive<ChevronDown /></p>)}</li>
                <li className='access-icon'>
                    <div> <p>{props.access}<ChevronDown /></p> </div>
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

export default (UserItem);