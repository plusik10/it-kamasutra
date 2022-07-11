import React from "react";
import s from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                Аватар+description
            </div>
            <h2>Посты:</h2>
            <MyPosts />
        </div>
    )
}

export default Profile