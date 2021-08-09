const initialState = {
    data:[],
    error:null
}

export const loginReducer = (state=initialState,action) => {
    switch(action.type){
        case 'LOGIN_REQUEST':
            return Object.assign({},state,{data:action.payload.data})
        break;
        case 'LOGIN_SUCCESS':
            return Object.assign({},state,{data:action.payload.data})
        break;
        case 'LOGIN_FAILED':
            return Object.assign({},state,{error:action.payload})
        break;
        default:
    }
    return state;
}
