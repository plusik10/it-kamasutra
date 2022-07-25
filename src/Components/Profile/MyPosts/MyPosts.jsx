import React from "react";
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement= props.posts.map(Posts=> <Post text={Posts.text} like={Posts.like}/>);
        
    let newPostElement = React.createRef();

    let addPost =() =>{
        let text = newPostElement.current.value;

        props.addPosts(text)
    }
    

    return (
        <div className={s.main}>
        <div className={s.wrapper}>
            
            <div className={s.create_post}>
                <img src="https://sun3-11.userapi.com/s/v1/ig2/um0jMa5T8qfns6YWISdLM19uPVJVXe4pdLEZAuHCm0C5Kx50GZpigbzvq4yJnqkHREWJB5ucplDrK8B7lmeRw87a.jpg?size=50x50&quality=96&crop=208,328,202,202&ava=1" alt="" />
                <textarea ref={newPostElement} placeholder="Что у вас нового?" className={s.textarea_create}></textarea>
                
            </div>
            <div className={s.settings}>
                <div className={s.item}>
                    Видно всем 
                    <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </div>
                <div className={s.item}>
                    Сейчас 
                    <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </div>
                <div className={s.item}>
                    Тематика <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </div>
            </div>
            <div className={s.submitpost}>
                <button onClick={ addPost } className={s.btnAddPost}>Добавить новый пост</button>
                </div>
                </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    )
}


export default MyPosts