import {UserType} from "../HW8";

type ActionTypes = ReturnType<typeof SortAC> |ReturnType<typeof CheckAC>


type PayloadType={
    age:number
}


export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sort = (a: UserType, b: UserType) => {
                if (a.name > b.name && action.payload === "up") {
                    return 1
                } else if (a.name < b.name && action.payload === "down") {
                    return 1
                } else {
                    return -1
                }
            }
            return [...state].sort(sort)
        }
        case 'check': {

            return state.filter(el => el.age >=action.payload.age)
        }
        default:
            return state
    }


}



export function SortAC(variant: 'up' | 'down') {
    return {type: "sort", payload: variant
    }  as const

}

export function CheckAC(age: number) {
    return {
        type: "check", payload: {age}
    } as const
}