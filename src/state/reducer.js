export const reducer = function (state,action){
    switch(action.type){
        case "TOGGLE_THEME":
            return {
                ...state,
                theme:{
                    ...state.theme,
                    type: state.theme.type==="light"?"dark":"light"
                }
            }
        default:
            return state
    }
}

export const initialState = {
    theme: {
        type : "dark"
    }
}