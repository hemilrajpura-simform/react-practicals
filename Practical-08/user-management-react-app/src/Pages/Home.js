import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch({ type: 'logout' });
  };

  const data = JSON.parse(localStorage.getItem("login"));
  return (
    <>

      {data === null ? <Navigate to='/' /> : null}
      {data !== null && <div className='home-page-main'>
        <p>Hello 
        <span className='home-page-imp-info'>  {data.username} </span>, 
        You are Registered With Email-id
        <span className='home-page-imp-info'> {data.email} </span> <br></br>and phone number 
       <span  className='home-page-imp-info'> {data.number} </span> </p>
        <div className='user-details'>
          <img src={data.img} alt='' />
          <h3>{data.username}</h3>
          <h3>{data.number}</h3>
          <h3>{data.email}</h3>
          <Link to='/' > <button onClick={logoutHandler} >Logout</button> </Link>
        </div>
      </div>}


    </>
  )
}

export default Home;