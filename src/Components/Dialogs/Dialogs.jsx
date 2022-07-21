import React from "react";
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogItems";

const Dialogs=(props)=>{
    return(
        <div className={s.wrapper}>
            <DialogItems id='0' text="Заедь прям щас" time="23:30" name="Anna Nemchinova"/>
            <DialogItems id='1' text="Сам такой" time="Вчера" name="Кирилл Шмелев"/>
            <DialogItems id='2' text="Отвали!!!!! дай поспать" time="17 июл" name="Маргоша"/>
            <DialogItems id='3' text="За огурцами приедьте уже наконец" time="9 фев" name="Светлана Герасимовна"/>
        </div>
    )
    
}

export default Dialogs