import React from "react";
import s from "../Profile/Profile.module.css";
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
       

        <div className={s.content}>
            <AboutMe/>
            <MyPosts posts={props.posts} addPosts={props.addPosts} />
        </div>
    )
}

export default Profile