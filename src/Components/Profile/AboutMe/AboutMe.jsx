import React from "react";
import s from "./AboutMe.module.css"
const AboutMe=()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.description}>
            <div className={s.fio}>
                <div className={s.name}>
                    Константин Вахрушев
                    <div className={s.status}>установить статус</div>
                </div>
                <div className={s.profile_online}>
                    заходил 13 минут назад
                </div>
            </div>
            <div className={s.profile_short}>
                <div className={s.key}>
                    Город:    
                </div>                
                <div className={s.value}>
                    Миасс
                </div>
            </div>
            <div className={s.profile_short}>
                <div className={s.key}>
                    Родители:    
                </div>                
                <div className={s.value}>
                    Тамара Балина
                </div>
            </div>
            <div className={s.profile_short}>
                <div className={s.key}>
                    Братья, сёстры:    
                </div>                
                <div className={s.value}>
                    Ксюша Балина
                </div>
            </div>
            <div className={s.profile_short}>
                <div className={s.key}>
                    
                </div>                
                <div className={s.value + ' ' + s.value_edit}>
                    Показать подробную информацию
                </div>
            </div>
            </div>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={s.value_num}>
                            45
                    </div>
                    <div className={s.descr}>
                        друзей
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.value_num}>
                            124
                    </div>
                    <div className={s.descr}>
                        подписчика
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.value_num}>
                            1
                    </div>
                    <div className={s.descr}>
                        фотография
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.value_num}>
                            16
                    </div>
                    <div className={s.descr}>
                        видеозаписей
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.value_num}>
                            117
                    </div>
                    <div className={s.descr}>
                        подарок
                    </div>
                </div>


            </div>
        </div>
    );
}

export default AboutMe;