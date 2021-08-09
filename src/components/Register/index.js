import { React,useState } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import registerAction from '../../Redux/Actions/Register';
import { NotificationManager} from 'react-notifications';
import './index.css'

function Register(props) {
    let {registerAction} = props.register
    let {history} = props
    let state = {
        username:"",
        email:"",
        password:"",
        confirm_password:""
    }
    let errors = {
        username:"",
        email:"",
        password:"",
        confirm_password:""
    }
    let [obj,setObj] = useState({...state})
    let [err,setErr] = useState({...errors})

     const handleChange = (e) => {
         let {name,value} = e.target;
          switch(name){
            case 'username':        
            err.username = value.length > 0  ? "": "Please enter user name";
            break;
          case 'email':
            err.email = value.length > 0  && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            ? "": "Please enter valid email id";
            break;
          case 'password':
            err.password = value.length > 0 && value.length > 6 ? "": "Please should contain  minimum length 6 letters";
            break;
          case 'confirm_password':
            err.confirm_password =  value.length > 0 && value == obj.password? "":  "Password shouldn't matched";
            break;
          default:
          }
          setErr({...err})
          setObj({...obj,[name]:value})
     }

     const  handleSubmit = async (e) => {
         e.preventDefault();
         let status = await registerAction(obj)
         if(status == 200){
            NotificationManager.success("Registration has been completed Successfully",'Register')
            setTimeout(function(){history.push('/login')},3000)
         }
         
     }

    return(
        <div>
            <form onSubmit = {(e)=>handleSubmit(e)}>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label>Email</label>
                            <input type="email"  className="form-control-plaintext"  name="email" value={obj.email} onChange={(e)=>handleChange(e)}/>
                        </div>
                        {err.email.length>0?<span>{err.email}</span>:""}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label>Username</label>
                            <input type="text"  className="form-control-plaintext"  name="username" value={obj.username} onChange={(e)=>handleChange(e)}/>
                        </div>
                        {err.username.length>0?<span>{err.username}</span>:""}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label >Password</label>
                            <input type="password" className="form-control-plaintext" name="password" value={obj.passsword} onChange={(e)=>handleChange(e)}/>
                        </div>
                        {err.password.length>0?<span>{err.password}</span>:""}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label>Confirm Password</label>
                            <input type="text" className="form-control-plaintext" name="confirm_password" value={obj.confirm_password} onChange={(e)=>handleChange(e)}/>
                        </div>
                        {err.confirm_password.length>0?<span>{err.confirm_password}</span>:""}
                    </div>
                    <button type="submit">Submit</button>
            </form>   
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        register:state.register
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       register:bindActionCreators({ registerAction }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
  

