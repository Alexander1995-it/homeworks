import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {v1} from "uuid";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {

        stop()
        const id: number = window.setInterval(() => {
            setDate (new Date)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date // fix with date
    const stringDate = date // fix with date

    const addZeroForDate = (time: number) => {
        return time < 10 ? '0' + time : time
    }

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span>{stringTime.getHours()}</span>:<span>{addZeroForDate(stringTime.getMinutes())}</span>: <span>{addZeroForDate(stringTime.getSeconds())}</span>
            </div>

            {show && (
                <div>
                    <span> {stringDate.getDate()}</span>. <span>{addZeroForDate(stringDate.getMonth())}</span>. <span>{stringDate.getFullYear()}</span>
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
