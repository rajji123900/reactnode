const initialState = {
    data:[],
    error:null
}

export const registerReducer = (state=initialState,action) => {
    switch(action.type){
        case 'REGISTER_REQUEST':
            return Object.assign({},state,{data:action.payload.data})
        break;
        case 'REGISTER_SUCCESS':
            return Object.assign({},state,{data:action.payload})
        break;
        case 'REGISTER_FAILED':
            return Object.assign({},state,{error:action.payload})
        break;
        default:
    }
    return state;
}
