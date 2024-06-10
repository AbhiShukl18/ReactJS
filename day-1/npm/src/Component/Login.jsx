import React, { useEffect, useState } from 'react'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const router= useNavigate();
    const[userData, setUserData]= useState({email: "", password: ""});
    const[errors, setErrors]=useState([]);
    const[disable, setDisable]=useState(true);
    console.log(errors,"errors");
    console.log(userData, "userdata")
    function handlechange(event){

        // console.log(event.target.value, event.target.name);
        setUserData({ ...userData, [event.target.name] : event.target.value});

    }

   async function handleSubmit(event){
        event.preventDefault();

        try{
            if(userData.email && userData.password){
                // toast.success("Registration Successfull. Go for Login")
                const response= {data: {success:true, message: "LOGIN Successfull."},}; 
                if(response.data.success){
                    setUserData({email: "", password: ""});
                    
                    toast.success(response.data.message);
                    router("/")
                }
            }
            else{
                toast.error("All fields are mandatory")
            }
        }

        catch(error){


        }
    }


    useEffect(()=>{

      const errorsArray=[];
    
      if(!userData.email){

        errorsArray.push("Email is required");
      }
      if(!userData.password){

        errorsArray.push("Password is required");
      }
      setErrors(errorsArray);
      console.log(errors.length, "error.length");
      if(errorsArray.length==0){
        setDisable(false);
      }
      else{
        setDisable(true);
      }
    }, [userData]);



  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <label htmlFor="">Email: </label><br />
        <input type="email" onChange={handlechange} name="email" id="" value={userData.email}/> <br />
        <label htmlFor="">Password: </label><br />
        <input type="password" onChange={handlechange} name="password" id="" value={userData.password}/> <br />
        {errors.length>0 && (

<div>
  {errors.map((error, i)=> (

    <p key={i}>{error}* </p>
  ))}
</div>

)}
<input disabled={disable} type="submit" value="LOGIN" /> <br />
      </form>
    </div>
  )
}

export default Login
