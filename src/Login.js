import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import "./Login.css"
function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();
    const register = () => {
        if (!name) alert("Please Enter you full name")

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch((error) => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }
        ).catch(error => alert(error));
    }
    return (
        <div className="login">
            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png" alt="linkedIn Image" />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name (required if registering)" />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input value={password} onChange={(e) => setPassWord(e.target.value)} type="password" placeholder="Password" />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
