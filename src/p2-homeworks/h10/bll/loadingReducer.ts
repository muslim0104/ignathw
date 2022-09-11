import {constants} from "fs";

export type StateType={
    isLoading:boolean
}
const initState = {
    isLoading:false
}

type ActionType=ReturnType<typeof loadingAC>
export const loadingReducer = (state = initState, action: ActionType):StateType => { // fix any
    switch (action.type) {
        case 'CHANGE-STATUS': {
            return {...state,isLoading: action.status}
        }
        default: return state
    }
}

export const loadingAC = (status:boolean): {type:string,status:boolean} => {
    return {
        type:"CHANGE-STATUS",
        status
    } as const
} // fix any