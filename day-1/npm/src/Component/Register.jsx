import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const router= useNavigate();
    const[userData, setUserData]= useState({name: "", email: "", password: ""});
    function handlechange(event){

        // console.log(event.target.value, event.target.name);
        setUserData({ ...userData, [event.target.name] : [event.target.value]});

    }

   async function handleSubmit(event){
        event.preventDefault();

        try{
            if(userData.name && userData.email && userData.password){
                // toast.success("Registration Successfull. Go for Login")
                const response= {data: {success:true, message: "Registration Successfull. Please Login now."},}; 
                if(response.data.success){
                    setUserData({name:"", email: "", password: ""});
                    
                    toast.success(response.data.message);
                    router("/login")
                }
            }
            else{
                toast.error("All fields are mandatory")
            }
        }

        catch(error){


        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        <label htmlFor="">Name: </label><br />
        <input type="text" onChange={handlechange} name="name" id="" value={userData.name} /> <br />
        <label htmlFor="">Email: </label><br />
        <input type="email" onChange={handlechange} name="email" id="" value={userData.email}/> <br />
        <label htmlFor="">Password: </label><br />
        <input type="password" onChange={handlechange} name="password" id="" value={userData.password}/> <br />
        <button>Click to Register</button>
      </form>
    </div>
  )
}

export default Register
