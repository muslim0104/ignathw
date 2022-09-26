
type ActionType=ReturnType<typeof changeThemeC>
 export type  StateType={
    theme:string
}
const initState = {
   theme:"some"
};

export const themeReducer = (state:StateType = initState, action:ActionType ): any => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,theme:action.theme}
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string) => {
    return {
        type:"CHANGE-THEME",
        theme
    } as const
}; // fix any