import { Avatar } from '@material-ui/core'
import "./SideBar.css"
import React from 'react'

function SideBar() {
    const recentItem=(topic)=>
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGOEHrFc5mAv8AUMMwvRl7rsnf1wvBYGf8Q&usqp=CAU" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Abhinav Kumar</h2>
                <h4>Abhinavkumar@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <p className="sidebar__statNumber">2,456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,896</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recents</p>
                {recentItem("react")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>

        </div>
    )
}

export default SideBar
