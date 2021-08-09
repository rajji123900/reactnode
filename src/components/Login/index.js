import { React,useState } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import loginAction from '../../Redux/Actions/Login';

function Login(props) {
    let {loginAction} = props.login
    let state = {
        email:"",
        password:"",
    }
    let [obj,setObj] = useState({...state})

     const handleChange = (e) => {
         let {name,value} = e.target
         setObj({...obj,[name]:value})
     }

     const handleSubmit = async(e) => {
         e.preventDefault();
         await loginAction(obj)
     }

    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="register" style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>                    
                        <label>Email</label>
                        <input type="email" name="email" value={obj.email} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={obj.passsword} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <button type="Submit">Submit</button>
            </form>
        </div>
    )
 }

 const mapStateToProps = (state) =>{
    return{
        login:state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       login:bindActionCreators({ loginAction }, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);


