import React , {useState,useContext} from "react";
import '../components/admin-form.css';
import axios from "axios";
import  {useNavigate}  from "react-router-dom";
import Authcontext from "../store/Authcontext";


export function AdminForm(props) {
    const Authctx = useContext(Authcontext);
    const Navigate = useNavigate();
    const [loginInput , setloginInput]= useState({
        adminemail:'',
        adminpassword:'',
    })
    const [ errormessage , seterrormessage]= useState('');
    const adminemailHandler = (event)=>{
        setloginInput((prevState)=>{
            return{
                ...prevState,
                adminemail: event.target.value
            }
        })
    }
    const adminpasswordHandler = (event)=>{
        setloginInput((prevState)=>{
            return{
                ...prevState,
                adminpassword: event.target.value
            }
        })
    }
    
    const formSubmit = (event)=>{
      
        if(loginInput.adminemail === '')
        {
            seterrormessage('please enter the email');
        }
       else if(loginInput.adminpassword === '' )
        {
            seterrormessage('please enter the password');
        }
       else 
        {
            try{
                const message = adminlogin(loginInput).then((response) => { 
                    seterrormessage('admin login succesfully');
                    console.log(errormessage);
                   Authctx.setisloggedin(true);
                    Navigate('/ADMINCART');


                });
            }
            catch (ex) {
                 console.log(ex.message);
                 seterrormessage(ex.response.data.message);
                
             }
                
         
        }
        event.preventDefault();
    }
    const adminlogin = async (formData)=>{

            const  details = {
                email : formData.adminemail,
                password : formData.adminpassword,
              }
             
                const message=await axios.post("http://localhost:4001/admins/login", details,{
                    headers:{
                        'Content-Type':'application/json',
                    }
                   })
    }
    return(
       
        <div className="adminform-container">
            
            <form className="adminform-main" onSubmit={formSubmit} >

                <h1>Log-In as Admin</h1>
                <div className="error1">{errormessage}</div>
                <div className="adminemail fm1">
                        <input type="email" id="adminemail"  name="adminemail" placeholder="enter your email" onChange={adminemailHandler} ></input>
                </div>
                <div className="adminpassword fm1">
                        <input type="password" id="adminpassword"  name="adminpassword" placeholder="enter your password" onChange={adminpasswordHandler}></input>
                </div>
               
                <input type="submit" value="Submit"className="submit fm1" ></input>
            </form>
        </div>
   
    );
    
}