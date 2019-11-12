export const ADD_SUCCESS_HINT = "ADD_SUCCESS_HINT"
export const ADD_WARNING_HINT = "ADD_WARNING_HINT"
export const ADD_ERROR_HINT = "ADD_ERROR_HINT"

const initialState = {
    hintsData : [

    ],
    firstButtonHintStatus: false
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SUCCESS_HINT:
            return {
                ...state,
                hintsData: [...state.hintsData, {id: 0, color: "green", title: "Success"} ]
            }
        case ADD_WARNING_HINT:
            return {
                ...state,
                hintsData: [...state.hintsData, {id: 1, color:"orange", title: "Warning"} ]
            }
        case ADD_ERROR_HINT:
            return {
                ...state,
                hintsData: [...state.hintsData, {id: 2, color:"red", title: "Error"} ]
            }
    }

    return state
}

export const addSuccessHint = () => ({type:ADD_SUCCESS_HINT, })
export const addWarningHint = () => ({type:ADD_WARNING_HINT, })
export const addErrorHint = () => ({type:ADD_ERROR_HINT, })



