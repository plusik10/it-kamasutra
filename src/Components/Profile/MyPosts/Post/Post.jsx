import React from "react";
import s from "../Post/Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.mainPost}>
                <img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg" alt="postimg" />
            
                <div className={s.text_post}>
                    <p>{props.text}</p>
                </div>
            </div>
            <div>
                <span>
                    likes: {props.like}
                </span>
            </div>
        </div>
    )
}

export default Post;

