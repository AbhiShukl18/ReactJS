import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../axiosConfig';
import { authcontext } from '../Context/authcontext';
import toast from 'react-hot-toast';

const SingleProductPage = () => {
    const {id}=useParams();
    const [product, setallproduct]=useState({});

    const[loader, setLoader]=useState(false);
    const { state } = useContext(authcontext);

    async function AddToCart() {
        try {
          const response = await Api.post("/user/add-to-cart", {
            userId: state?.user?.userId,
            productId: id,
          });
          console.log(response.data, "response")
          if (response.data.success) {
            toast.success(response.data.message);
          }
        } catch (error) {
          console.log(error);
        }
      }
    async function getSingleProductData(){
        setLoader(true);
        
        try {
            const response = await Api.post ("/product/get-single-product", {
                productId: id,
             
            }); // change
            console.log(response, "res");
            console.log(response.data, "response data")
            if (response.data.success) {
              //   console.log(response.data);
              setLoader(false);
              setallproduct(response.data.product); // change
            //   console.log(response.data.products)
                }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{

        if(id){

            getSingleProductData();
        }
    }, [id])
  return (
    <div>
      <h1>SINGLE PRODUCT PAGE</h1>
      {loader ? 
      (<h1>Loading....</h1>)
      :
      ( 
      <div>
        <img src={product.image} alt="" />
        <h2>Name: {product.name} </h2>
        <h2>Price: {product.price} </h2>
        <button onClick={AddToCart}>Add to Cart</button>

        </div>)

      }
    </div>
  )
}

export default SingleProductPage
