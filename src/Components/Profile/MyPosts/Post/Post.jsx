import React from "react";
import s from "../Post/Post.module.css";

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.mainPost}>
                <img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg" alt="postimg" />
            
                <div className={s.text_post}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam blanditiis similique praesentium totam! Quas ipsa rerum eum velit impedit sit accusantium, sed nostrum commodi vitae, nobis dolorem aliquid, repellendus eveniet.</p>
                </div>
            </div>
            <div>
                <span>
                    like
                </span>
            </div>
        </div>
    )
}

export default Post;