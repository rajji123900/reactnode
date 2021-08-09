import { REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILED } from "../../Constants/registerConstants"; 
import axios from 'axios';

export function registerRequest(data)  {
    return{
      type:REGISTER_REQUEST,
      payload:data,
    }
}
export function registerSuccess(data)  {
    return{
      type:REGISTER_SUCCESS,
      payload:data,
    }
}
export function registerFailed(err)  {
    return{
      type:REGISTER_FAILED,
      error:err
    }
}

const registerAction = (state) => {
    return async (dispatch) => {
        try{
            dispatch(registerRequest)
            let headers = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            let {status} = await axios.post('http://localhost:5557/v1/register',state,headers)
            console.log(status)
            dispatch(registerSuccess(status))
            return status
         }catch(err){
            dispatch(registerFailed(err))
         }
   }
}
export default registerAction;
