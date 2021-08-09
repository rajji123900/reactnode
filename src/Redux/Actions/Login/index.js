import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILED } from "../../Constants/loginConstants"; 
import axios from 'axios';

export function loginRequest(data)  {
    return{
      type:LOGIN_REQUEST,
      payload:data
    }
}
export function loginSuccess(data)  {
    return{
      type:LOGIN_SUCCESS,
      payload:data
    }
}
export function loginFailed(err)  {
    return{
      type:LOGIN_FAILED,
      error:err
    }
}
const loginAction = (state) => {
  let {email,password} = state
  return async (dispatch) => {
      try{
          dispatch(loginRequest)
          let headers = {
            headers:{
                "Content-Type":"application/json"
            }
          }
          let {status} = await axios.get(`http://localhost:5557/v1/login?email=${email}&password=${password}`,headers)
          console.log(status)
          dispatch(loginSuccess(status))
          return status;
       }catch(err){
          dispatch(loginFailed(err))
       }
 }
}

export default loginAction;
