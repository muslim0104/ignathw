import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high'|'low'|'middle'
export type AffairType = defaultAffairsType // need to fix any
export type FilterType = 'all' | AffairPriorityType




export type defaultAffairsType={
    _id:number
    name:string
    priority:AffairPriorityType
}

// constants
const defaultAffairs: Array<defaultAffairsType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<defaultAffairsType>, filter: FilterType): Array<defaultAffairsType> => { // need to fix any
    if (filter === 'all')
        return affairs
    else return  affairs.filter((elem)=>elem.priority===filter)
}
export const deleteAffair = (affairs: Array<defaultAffairsType>, _id: number):  Array<defaultAffairsType> => { // need to fix any
    return  affairs.filter((elem)=>elem._id!==_id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<defaultAffairsType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
