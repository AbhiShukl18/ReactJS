import { useEffect, useState } from "react";
import axios from "axios";
import "./allproduct.css";
function AllProducts(){ 

    const [allproducts, setallproducts]=useState([]);
    const[loader, setLoader]=useState(false);

async function GetProducts(){
    setLoader(true);

try{
    const response= await axios.get("https://fakestoreapi.com/products");
    setLoader(false);

    // console.log(response);
    setallproducts(response.data);
}

catch(error){
    console.log(error);
}

}

useEffect(()=>{

    GetProducts();   ///calling function(api)
}, []);

    return (
        <>
         
<link rel="stylesheet" href="allproduct.css" />
        <div>
            <h1>All Products</h1>
         {loader ? (
            <div>
                <h2>Loading...</h2>
            </div>
          ) :
          (
            <div class="body">
                {allproducts.map((prod)=>(
                    <div id="box" >
                    <img src={prod.image}/>
                    <div id="content">
                    <p>Title: {prod.title} </p>
                    <p>Amount:  ₹{prod.price} </p>
                    <p>Id: {prod.id} </p>
                    <p>Rating: {prod.rating.rate} ★</p>
                    <p>Count: {prod.rating.count} </p>
                    <button>Add to Cart</button>
                    </div> 
                    </div>
                    
                ))}
            
            </div>)}
        </div>
        </>
    );
    
}

export default AllProducts;