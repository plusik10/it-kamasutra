import React from "react";
import s from "./Avatar.module.css"

const Avatar =()=>{
    return (
        <div>
        <div className={s.main}>
            <img className={s.image} src="https://sun1-86.userapi.com/s/v1/ig2/kgOWFKvlA54UvGRSDt3j1kP1dMjXHJArqKyvlba34o18AL6q738nnC4PjD3p0tIPKS1yZ7ZnBQST-zYwPlzCO3vQ.jpg?size=202x202&quality=96&crop=208,328,202,202&ava=1"/>
            <input className={s.btnEdit} value="Редактировать" type="Button"/>
        </div>
        <div className="friends">
            Друзья: 45
        </div>
        </div>
    )
}

export default Avatar