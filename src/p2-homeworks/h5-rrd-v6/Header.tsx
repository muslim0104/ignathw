import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import './Link.css'



function Header() {


    const [show,setShow]=useState<boolean>(false)

function callback() {
setShow(true)
}
    return (
        <>
        <div className={show ? "show":"hide"}>

            <NavLink to={PATH.HW_1}> HW1 </NavLink>
            <NavLink to={PATH.HW_2}> HW2 </NavLink>
            <NavLink to={PATH.HW_3} > HW3 </NavLink>
            <NavLink to={PATH.HW_4}> HW4 </NavLink>
        </div>
            <button onClick={callback} > Show homeworks</button>
</>

    )
}

export default Header
