import React, { useState } from 'react'
import { emailValidation } from '../../regex'
import './Login.css';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch ,useSelector } from 'react-redux';
import {login} from '../../redux/action'
import {useNavigate} from 'react-router-dom'



const Login = () => {
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmailid] = useState();
    const [userid, setUserid] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState(false);
    const [Msg, setMsg] = useState();
    const [empty,setEmpty] =useState(false);
    const [open ,setOpen] = useState(false);
    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const change = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        if (field === 'name') {
            setName(value);
        }
        else if (field === 'password') {
            setPassword(value);
        }
        else if (field === 'mobile') {
            setMobile(value);
        }
        else if (field === 'userid') {
            setUserid(value);
        }
        else if (field === 'email') {
            if (emailValidation(value)) {
                setEmailid(value);
                setErr(false);
            }
            else {
                setErr(true);
            }
        }

    }

    const handleClose = () => {
        setOpen(false);
      };

    const signup = async (e) => {
        e.preventDefault();
      
        try {
           
            if(userid !==undefined& password !==undefined && name !==undefined && mobile !==undefined && email !==undefined){

            setEmpty(false);

            const body = { userid, password, name, mobile, email };
          

            const response = await axios.post('http://localhost:3030/sign-up', body);
           
            setMsg(response.data.msg);
            setOpen(true);
                }
                else{
                  setEmpty(true)
                }
            }
           
        catch (error) {
        
            setMsg(error.response.data.msg)
            setOpen(true);

        }
    }
    const log =async(e)=>{ 
        e.preventDefault();
        try{

            if(userid !==undefined && password !==undefined){
               
               let response= await axios.post('http://localhost:3030/' ,{'userid':userid, 'password':password});
              
             

                   localStorage.setItem('accessToken',  response.data.accessToken);
                   localStorage.setItem('refreshToken', response.data.refreshToken);
                   localStorage.setItem('name',  response.data.userbody.name);
                   dispatch(login({ flag:true,username :response.data.userbody.name}));
                   navigate('/')
              

            }
        }
        catch(error){
           
            setMsg(error.response?.data.msg);
            setOpen(true);
        }
    }



    return (
        <div className="login">
            <div className="form_div">

                <form>
                    <input type="text" placeholder="name" onChange={(e) => { change(e) }} name="name" />
                    <input type="text" placeholder="mobileno" onChange={(e) => { change(e) }} name="mobile" />
                    <input type="text" placeholder="emaild" onChange={(e) => { change(e) }} name="email" />
                    {err ? <small> Not a valid email</small> : <span></span>}
                    <input type="text" placeholder="userid" onChange={(e) => { change(e) }} name="userid" />
                    <input type="password" placeholder="password" onChange={(e) => { change(e) }} name="password" />
                    <button onClick={(e) =>log(e)}>Login</button>
                    <button onClick={(e) => signup(e)}>Signup</button>
                </form>
               

            </div>
          
            {empty?<small>Please enter all details</small>:<small></small>}
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>{Msg}</DialogTitle>
            </Dialog>
           
        </div>
    )
}

export default Login
