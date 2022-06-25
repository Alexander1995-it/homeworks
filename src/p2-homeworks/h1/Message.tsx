import React from 'react'
import style from './Message.module.css'

function Message(props: any) {
    return (
        <div className={style.message__block}>
            <div className={style.wrapper}>
                <div className={style.column__img}><img src={props.avatar} width={'55px'} height={'55px'}/></div>
                <div className={style.column__message}>
                    <div className={style.row__name}>{props.name}</div>
                    <div className={style.row__message}>{props.message}</div>
                    <div className={style.row__time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
