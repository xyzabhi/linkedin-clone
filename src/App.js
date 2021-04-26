import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const [xuser, setUser] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [xuser])
  console.log(xuser)
  return (
    <div className="app">
      <Header />
      {!user.user ? <Login /> : (<div className="app__body">
        <SideBar />
        <Feed />

      </div>)}

    </div>
  );
}

export default App;
