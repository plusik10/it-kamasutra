import React from "react";
import s from "../Profile/Profile.module.css";
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
       

        <div className={s.content}>
            <AboutMe/>
            <MyPosts 
                    posts={props.posts} 
                    newPostText={props.newPostText}
                    addPosts={props.addPosts}
                    updateNewPostText={props.updateNewPostText}
                    />
        </div>
    )
}

export default Profile