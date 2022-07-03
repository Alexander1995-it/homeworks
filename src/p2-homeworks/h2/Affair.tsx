import React from 'react'
import style from './Affair.module.css'

type AffairPropsType = {

    affair: {
        _id: number
        name: string
        priority: string
    }
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.affair__wrapper}>
            <div className={style.affair__column}>{props.affair.name} </div>
            <div className={style.priority__column}>{props.affair.priority}</div>
            <button className={style.btn__column} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
