import React from "react";
import s from "../Header/Header.module.css";

const Header=()=>{
    return(
        <div className={s.header}>
             <h1 className={s.header__h1}>it-kamasutra</h1>
        </div>
    )
}

export default Header;