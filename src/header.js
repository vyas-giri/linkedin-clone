import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './headerOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './fire';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='In-Blue-48.png' alt='logo'/>

            <div className='header__search'>
                <SearchIcon />
                <input type='text' placeholder='Search'></input>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title='My network' />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions avatar={true}
            title='me' 
            onClick={logoutOfApp}
            />

        </div>
    </div>
  )
}

export default Header;