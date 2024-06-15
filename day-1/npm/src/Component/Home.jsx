import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../Context/authcontext";

function Home(){
    const{state}= useContext(authcontext)
    const router=useNavigate();
    return <div> 
        <h1>Home- Hi!! {state?.user?.name} </h1>
        <p><button onClick={()=> router("/Login")}>Go to Login page</button></p>
        <p><button onClick={()=> router("/Register")}>Go to Register page</button></p>
        <p><button onClick={()=> router("/Mens")}>Go to Mens page</button></p>
        <p><button onClick={()=> router("/Profile")}>Go to Profile page</button></p>
        <p><button onClick={()=> router("/Use-State")}>Go to UseState page</button></p>
        <p><button onClick={()=> router("/Use-Effect")}>Go to UseEffect page</button></p>
        <p><button onClick={()=> router("/Use-Effect2")}>Go to UseEffect2 page</button></p>
        <p><button onClick={()=> router("/Use-Effect3")}>Go to UseEffect3 page</button></p>
        <p><button onClick={()=> router("/use-navigate")}>Go to Navigate page</button></p>
        <p><button onClick={()=> router("/mapping")}>Go to Mapping page</button></p>
        <p><button onClick={()=> router("/all-products")}>Go to All products page</button></p>
        <p><button onClick={()=> router("/function-props")}>Go to Function-props page</button></p>
        <p><button onClick={()=> router("/styled-component")}>Go to styled-components page</button></p>
        <p><button onClick={()=> router("/inline-style")}>Go to inline-styling page</button></p>
        <p><button onClick={()=> router("/todo")}>Go to Todo page</button></p>
        <p><button onClick={()=> router("/reducer")}>Go to Reducer page</button></p>



    </div>;
   

    }
    
    export default Home;