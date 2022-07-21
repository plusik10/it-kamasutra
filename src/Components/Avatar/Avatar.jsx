import React from "react";
import s from "./Avatar.module.css"

const Avatar =()=>{
    return (
        <div>
        <div className={s.main}>
            <img className={s.image} src="https://sun1-86.userapi.com/s/v1/ig2/kgOWFKvlA54UvGRSDt3j1kP1dMjXHJArqKyvlba34o18AL6q738nnC4PjD3p0tIPKS1yZ7ZnBQST-zYwPlzCO3vQ.jpg?size=202x202&quality=96&crop=208,328,202,202&ava=1"/>
            <input className={s.btnEdit} value="Редактировать" type="Button"/>
            <div className={s.menu}>
                <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.1 19a.9.9 0 0 1 .9-.9h18a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9zM16.5 5.9a.9.9 0 1 1 0-1.8H21a.9.9 0 0 1 .9.9v4.5a.9.9 0 1 1-1.8 0V7.17l-5.96 5.97a.9.9 0 0 1-1.28 0L9.5 9.77l-5.86 5.87a.9.9 0 1 1-1.28-1.28l6.5-6.5a.9.9 0 0 1 1.28 0l3.36 3.37 5.33-5.33z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>
                <input className={s.input_menu} value="Статистика страницы" type="button"></input>
            </div>
        </div>
        <div className={s.friends}>
            <b>Друзья</b> 45 
            <div className={s.friendList}>
                <div className={s.friend}>
                    <img class="people_cell_img" src="https://sun1-91.userapi.com/s/v1/ig2/_q-jx1vTfgJ25DQrYKOSdRJk5awvQQ5FPI1RDnzTUUOjksQaGz_ZlIyqTSHWQvjg8tbXRY1ule53PbPUkuMl4diy.jpg?size=50x50&amp;quality=96&amp;crop=242,2,1435,1435&amp;ava=1" alt="Иван Голощапов"></img>
                    Иван
                </div>
                <div className={s.friend}>
                    <img class="people_cell_img" src="https://sun1-91.userapi.com/s/v1/ig2/_q-jx1vTfgJ25DQrYKOSdRJk5awvQQ5FPI1RDnzTUUOjksQaGz_ZlIyqTSHWQvjg8tbXRY1ule53PbPUkuMl4diy.jpg?size=50x50&amp;quality=96&amp;crop=242,2,1435,1435&amp;ava=1" alt="Иван Голощапов"></img>
                    Михаил
                </div>
                <div className={s.friend}>
                    <img class="people_cell_img" src="https://sun1-91.userapi.com/s/v1/ig2/_q-jx1vTfgJ25DQrYKOSdRJk5awvQQ5FPI1RDnzTUUOjksQaGz_ZlIyqTSHWQvjg8tbXRY1ule53PbPUkuMl4diy.jpg?size=50x50&amp;quality=96&amp;crop=242,2,1435,1435&amp;ava=1" alt="Иван Голощапов"></img>
                    Антон
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default Avatar