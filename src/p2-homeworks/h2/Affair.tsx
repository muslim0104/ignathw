import React from 'react'
import {defaultAffairsType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: defaultAffairsType // need to fix any
    deleteAffairCallback:(_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>

            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
