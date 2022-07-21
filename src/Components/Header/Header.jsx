import React from "react";
import s from "../Header/Header.module.css";

const Header=()=>{
    return(
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/vk_logo_icon_147212.png" alt="" />
                <b>ВКОНТАКТЕ</b>
            </div>
        </div>
    )
}

export default Header;