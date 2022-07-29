import React from 'react'

import Message from "./Message";
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Muslim',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (

       <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />



    )
}

export default HW1
