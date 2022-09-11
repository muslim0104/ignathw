import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import './Link.css'


function Header() {


    const [show, setShow] = useState<boolean>(false)

    function callback() {
        setShow(true)
    }

    return (
        <>
            {show && <div>

                <NavLink to={PATH.HW_1}> HW1 </NavLink>
                <NavLink to={PATH.HW_2}> HW2 </NavLink>
                <NavLink to={PATH.HW_3}> HW3 </NavLink>
                <NavLink to={PATH.HW_4}> HW4 </NavLink>
                <NavLink to={PATH.HW_6}> HW6 </NavLink>
                <NavLink to={PATH.HW_7}> HW7 </NavLink>
                <NavLink to={PATH.HW_8}> HW8 </NavLink>
                <NavLink to={PATH.HW_9}> HW9 </NavLink>
                <NavLink to={PATH.HW_10}> HW10 </NavLink>
                <NavLink to={PATH.HW_11}> HW11 </NavLink>

            </div>}
            <button onClick={callback}> Show homeworks</button>
        </>

    )
}

export default Header
