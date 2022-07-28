import React from "react"
import s from './Message.module.css'

const Message = (props)=>{
    let img;  
    let name = (props.name).split(' ')
    if (props.name === "Константин"){
        img = "https://sun1-86.userapi.com/s/v1/ig2/um0jMa5T8qfns6YWISdLM19uPVJVXe4pdLEZAuHCm0C5Kx50GZpigbzvq4yJnqkHREWJB5ucplDrK8B7lmeRw87a.jpg?size=50x50&quality=96&crop=208,328,202,202&ava=1";     
    }
    else{
        img = "https://sun1-54.userapi.com/s/v1/if1/qcAPKr-GhvIWkP0GBfMnUBdADaic7WdSrhVLrVOF7RaxsKdqF9BeDzyG21FVhqtStCqsFA.jpg?size=50x50&quality=96&crop=6,0,2153,2153&ava=1"
    }


    return(
        <div className={s.wrapper}>
            <div className={s.profile}>
                <img src={img} alt="prof" />
            </div>
            <div className={s.text}>
                <div className={s.name}>
                    {name[0]}
                    <div className={s.time}>
                    {props.time}
                    </div>
                </div>
                <div className={s.Message}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Message
