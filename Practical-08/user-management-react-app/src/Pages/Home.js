import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const photoLink = useSelector((state) => state.img);
  const phone = useSelector((state) => state.number);
  const isLogin = useSelector((state) => state.isLogin);

  const dispatch = useDispatch();
  const navi = useNavigate();
  const logoutHandler = () => {
    dispatch({ type: 'logout' });
    console.log("logout handler called");
    navi('/');
  };


  return (
    <>
      { !isLogin && <Navigate to='/' />  }

      <div className='home-page-main'>Home</div>
      <p>Congratulations, You are Registered</p>
      <div className='user-details'>
        <img src={photoLink} alt='' />
        <h3>{username}</h3>
        <h3>{phone}</h3>
        <h3>{email}</h3>
        <button onClick={logoutHandler} >Logout</button>
      </div>
    </>
  )
}

export default Home;