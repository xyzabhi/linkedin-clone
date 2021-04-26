import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import InputOption from './InputOption'
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post'
import { db } from './firebase'
import firebase from "firebase"
import FlipMove from "react-flip-move";
function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(
                doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )
            ))
        )
    }, [])
    const sendPost = e => {
        e.preventDefault();
        if (input !== "")
            db.collection("posts").add(
                {
                    name: "Abhinav",
                    description: "This is  a test",
                    message: input,
                    photoUrl: "",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                }
            )
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={sendPost}>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={SubscriptionIcon} color="#e7a33e" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e" />

                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />)}
            </FlipMove>
        </div>
    )
}

export default Feed
