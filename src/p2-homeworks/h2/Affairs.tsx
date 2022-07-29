import React from 'react'
import Affair from './Affair'
import {AffairType, defaultAffairsType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<defaultAffairsType>
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback:(_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: defaultAffairsType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')}
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
