import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../axiosConfig";
import { authcontext } from "./authContext";

const Addproduct = () => {
  const { state, dispatch } = useContext(authcontext);
  const router = useNavigate();
  const [productData, setproductData] = useState({ name: "", price: "",category: "", quantity: "" });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);
  console.log(errors, "errors");
  console.log(productData, "productData");
 function handlechange(event) {
    // console.log(event.target.value, event.target.name);
    setproductData({ ...productData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (productData.name && productData.price && productData.category && productData.quantity ) {
        const response=await Api.post("/product/create-new-product", {productData})
        // toast.success("Registration Successfull. Go for Login")
        // const response = {
        //   data: {
        //     success: true,
        //     message: "LOGIN Successfull.",
        //     userData: { name: "Abhi" },
        //   },
        // };

        if (response.data.success) {
          
          dispatch({ type: "ADD", payload: response.data.productData });
          setproductData({ name: "", price: "", category: "", quantity: "" });
        //   router("/");
          toast.success(response.data.message);

        }
        else {
          toast.error(response?.data?.error)
          // console.log(response.data.error, "error")
        }
      } else {
        toast.error("All fields are mandatory");
      }
    } catch (error) {

    //   console.log(error,"loginerror")
      toast.error(error?.response?.data?.error)
    }
  }

//   useEffect(() => {
//     const errorsArray = [];

//     if (!userData.email) {
//       errorsArray.push("Email is required");
//     }
//     if (!userData.password) {
//       errorsArray.push("Password is required");
//     }
//     setErrors(errorsArray);
//     console.log(errors.length, "error.length");
//     if (errorsArray.length == 0) {
//       setDisable(false);
//     } else {
//       setDisable(true);
//     }
//   }, [userData]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add to Cart</h1>
        <label htmlFor="">Name: </label>
        <br />
        <input
          type="text"
          onChange={handlechange}
          name="name"
          id=""
          value={productData.name}
        />{" "}
        <br />
        <label htmlFor="">Price: </label>
        <br />
        <input
          type="number"
          onChange={handlechange}
          name="price"
          id=""
          value={productData.price}
        />{" "}
        <br />
        <label htmlFor="">Category: </label>
        <br />
        <input
          type="text"
          onChange={handlechange}
          name="category"
          id=""
          value={productData.category}
        />{" "}
        <br />
        <label htmlFor="">Quantity: </label>
        <br />
        <input
          type="number"
          onChange={handlechange}
          name="quantity"
          id=""
          value={productData.quantity}
        />{" "}
        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i}>{error}* </p>
            ))}
          </div>
        )}
        <br /><br />
        <input type="submit" value="ADD" /> <br />
      </form>
    </div>
  );
};

export default Addproduct;
