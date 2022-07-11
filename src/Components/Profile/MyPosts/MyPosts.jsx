import React from "react";
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            
            <div className={s.create_post}>
                <textarea className={s.textarea_create}></textarea>
                <button>Добавить новый пост</button>
            </div>
            
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    )
}


export default MyPosts