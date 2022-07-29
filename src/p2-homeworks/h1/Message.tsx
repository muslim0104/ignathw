import React from 'react'
import classes from './Message.module.css'

type HomeworkType = {
    name: string
    avatar: string
    message: string
    time: string

}

function Message(props: HomeworkType) {
    return (

        <div className={classes.main}>


            <div className={classes.avatar}>
                <img src={props.avatar} ></img>
            </div>

            <div className={classes.content}>
                <h2 className={classes.name_1}>{props.name}</h2>
                <p className={classes.message}>{props.message}</p>
                <span className={classes.time}>{props.time}</span>
            </div>

        </div>


    )
}

export default Message
