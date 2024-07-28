import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import "../usestate 25may/allproducts.css";
import Api from "../axiosConfig";
import { authcontext } from "../Context/authcontext";
function YourAddedProducts(){ 

    const [allproducts, setallproducts]=useState([]);
    console.log(allproducts,"allproducts");
    const[loader, setLoader]=useState(false);
    const {state}=useContext(authcontext)

    async function GetProducts(){
    setLoader(true);

    try {
        const response = await Api.post("/admin/your-added-products", {
          userId: state?.user?.userId,
         
        }); // change
        
        console.log(response.data, "response data")
        if (response.data.success) {
          //   console.log(response.data);
          setLoader(false);
          setallproducts(response.data.products); // change
          console.log(response.data.products)
            }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        // api call to backend
        if (state) {
          GetProducts();
        }
      }, [state]);

    return (
        <>
         
{/* <link rel="stylesheet" href="./allproduct.css" /> */}
        <div>
            <h1>Your Added Products</h1>
         {loader ? (
            <div>
                <h2>Loading...</h2>
            </div>
          ) :
          (
            <div class="body">
                {allproducts?.map((prod)=>(
                    <div id="box" >
                    <img src={prod.image}/>
                    <div id="content">
                    <p>Name: {prod.name} </p>
                    <p>Price:  ₹{prod.price} </p>
                    {/* <p>Id: {prod.id} </p>
                    <p>Rating: {prod.rating.rate} ★</p>
                    <p>Count: {prod.rating.count} </p> */}
                    <button>Add to Cart</button>
                    </div> 
                    </div>
                    
                ))}
            
            </div>)}
        </div>
        </>
    );
    
}

export default YourAddedProducts;