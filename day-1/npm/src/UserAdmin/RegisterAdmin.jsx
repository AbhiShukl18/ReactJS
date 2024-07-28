import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../axiosConfig";

const RegisterAdmin = () => {
  const router = useNavigate();
  const [adminData, setadminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  // const[disable, setDisable]=useState(true);
  function handlechange(event) {
    // console.log(event.target.value, event.target.name);
    setadminData({
      ...adminData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (adminData.name && adminData.email && adminData.password) {
        // toast.success("Registration Successfull. Go for Login")
        const response = await Api.post("/admin/register-admin", {
          adminData,
        });
        // console.log(response,"response")
        if (response.data.success) {
          console.log("success")

          setadminData({ name: "", email: "", password: "" });
          router("/login-admin");
          toast.success(response.data.message);
        }

        else{
          toast.error(response?.data?.error);
        }
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response?.data?.error);
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>REGISTER ADMIN</h1>
        <label htmlFor="">Name: </label>
        <br />
        <input
          type="text"
          onChange={handlechange}
          name="name"
          value={adminData.name}
        />{" "}
        <br />
        <label htmlFor="">Email: </label>
        <br />
        <input
          type="email"
          onChange={handlechange}
          name="email"
          value={adminData.email}
        />{" "}
        <br />
        <label htmlFor="">Password: </label>
        <br />
        <input
          type="password"
          onChange={handlechange}
          name="password"
          value={adminData.password}
        />{" "}
        <br />
        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i}>{error}* </p>
            ))}
          </div>
        )}
        <input type="submit" value="REGISTER" /> <br />
      </form>
    </div>
  );
};

export default RegisterAdmin;
