import React from "react";
import { NavLink } from "react-router-dom";
import Dialogs from "../Dialogs";
import s from './DialogItems.module.css'

const DialogItems=(props)=>{
    return(
        <NavLink to={"/messages/"+props.id}>
        <div className={s.wrapper}>
            <div className={s.img}>
                <img src="https://sun3-11.userapi.com/s/v1/if1/qcAPKr-GhvIWkP0GBfMnUBdADaic7WdSrhVLrVOF7RaxsKdqF9BeDzyG21FVhqtStCqsFA.jpg?size=50x50&quality=96&crop=6,0,2153,2153&ava=1" alt="" />
            </div>
            <div className={s.main}>
               <div className={s.name}>
                {props.name}
               </div>
               <div className={s.text}>
                {props.text}
               </div>
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </div>
        </NavLink>
       
    )
}

export default DialogItems