import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {homeWorkReducer} from "../h8/bll/homeWorkReducer";

function Clock() {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
    clearInterval(timerId)
    }
    const start = () => {
stop()



        const id: number = window.setInterval(() => {



         setDate(new Date())
            console.log(date.toLocaleTimeString())
            }, 1000)
        setTimerId(id)
    }



    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString()// fix with date
    const stringDate =date.toLocaleDateString()// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
