import React from "react";
import s from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props)=>{
        let arrowMessage = props.message.map(message=><Message name={message.name} time={message.time} text={message.text}/>)


    return(
        <div className={s.wrapper}>
            <div className={s.zaglushka}></div>
            <div className={s.header}>
                <div className={s.back}>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.88 18.12a1.25 1.25 0 0 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76l7-7a1.25 1.25 0 0 1 1.76 1.76L9.77 12z" fill="currentColor"></path></svg>
                   <div className={s.back_text}></div> Назад
                </div>
                <div className={s.name}>
                    Anna nemchinova
                    <div className={s.subtext}>была в сети час назад</div>
                </div>
                <div className={s.profile}>
                    <img src="https://sun1-54.userapi.com/s/v1/if1/qcAPKr-GhvIWkP0GBfMnUBdADaic7WdSrhVLrVOF7RaxsKdqF9BeDzyG21FVhqtStCqsFA.jpg?size=50x50&quality=96&crop=6,0,2153,2153&ava=1" alt="prof" />
                </div>
            </div>
            <div className={s.Chat}>
                {arrowMessage}
                 <div className={s.zaglushka_3}></div>
            </div>
            <div className={s.sendMess}>
                <div className={s.textarea}>
                    <textarea placeholder="Напишите сообщение..."></textarea>
                </div>
                <div className={s.send}>
                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="send_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="send_24__send_24"><path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path><path d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z" id="send_24__Mask" fill="currentColor"></path></g></g></svg>
                </div>
            </div>
            <div className={s.zaglushka_2}></div>
        </div>
    )
}


export default Messages