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
           
            <Post text="eto sozdano propsom" like="5" />
            <Post text="Hello world!" like="999" />
            <Post text="its my first post" like="1"/>
        </div>

    )
}


export default MyPosts