import React from "react";
import s from "../Profile/Profile.module.css";
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <AboutMe/>
            <MyPosts />
        </div>
    )
}

export default Profile