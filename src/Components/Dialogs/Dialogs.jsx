import React from "react";
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogItems";


const Dialogs=(props)=>{
    let DialogsData = [{
        id:1,
        name : 'Anna Nemchinova',
        last_message: 'Заедь прям сейчас',
        time:"12:50"
    },
    {
        id:2,
        name:'Кирилл Шмелев',
        last_message: "Сам такой",
        time: "Вчера"
    },
    {
        id:3,
        name:"Маргоша",
        last_message: "Отвали я спать хочу!",
        time:"17 июл"
    },
    {
        id:4,
        name:"Светлана Герасимовна",
        last_message:"За огурацими бегом!",
        time:"9 фев"
    }];

    let ArrayDialogs=DialogsData
    .map(dialogs=><DialogItems id={dialogs.id} text={dialogs.last_message} time={dialogs.time} name={dialogs.name}/>)
 
    return(
        <div className={s.wrapper}>
            {ArrayDialogs}
        </div>
    )
}

export default Dialogs