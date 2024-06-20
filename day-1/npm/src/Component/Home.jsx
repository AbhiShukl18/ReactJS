import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../Context/authcontext";
import {themeContext} from "../Context/themecontext";

function Home(){
    const{state}= useContext(authcontext);  
    const{themeState, dispatch}=useContext(themeContext);
    const router=useNavigate();
    return(

     <div style=
     { 
        {
            backgroundColor: themeState.theme==="light"? "white": "#292929",
            color: themeState.theme==="light"? "#292929": "white",
          
            }}> 
            
            <h1>Home- Hi!!{state?.user?.name} </h1>
            <button style={{marginLeft: "90%",
                fontSize:"14px",
                width: "150px",
                height: "40px",
                backgroundColor: themeState.theme==="light"? "wheat": "white",
                color: themeState.theme==="light"? "black": "black",
                cursor:"pointer",
            }}
        onClick={() =>
          dispatch({ type: themeState?.theme === "light" ? "DARK" : "LIGHT" })
        }
      >
        Switch to {themeState?.theme === "dark" ? "light" : "dark"} Mode
      </button>
            {/* <p><button onClick={()=> router("/Login")}>Go to Login page</button></p>
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
            <p><button onClick={()=> router("/reducer")}>Go to Reducer page</button></p> */}
         
      <br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br />
          
    
    </div>
   );

    }
    
    export default Home;