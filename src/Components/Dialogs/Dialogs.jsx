import React from "react";
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogItems";


const Dialogs=(props)=>{
    

    let ArrayDialogs=props.DialogsData
    .map(dialogs=><DialogItems id={dialogs.id} text={dialogs.last_message} time={dialogs.time} name={dialogs.name}/>)
 
    return(
        <div className={s.wrapper}>
            {ArrayDialogs}
        </div>
    )
}

export default Dialogs