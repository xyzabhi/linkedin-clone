import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BussinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationIcon from "@material-ui/icons/Notifications"
import HeaderOption from './HeaderOption'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'
function Header() {
    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/174/174857.svg" />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BussinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationIcon} title="Notifications"/>
                <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wj5eIytdhkQR7q3Bs6HuamdVegth7QJwrw&usqp=CAU" title="me" onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
