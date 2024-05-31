import { useNavigate } from "react-router-dom";

function Home(){
    const router=useNavigate();
    return <div> 
        <h1>Home</h1>
        <p><button onClick={()=> router("/Login")}>Go to Login page</button></p>
        <p><button onClick={()=> router("/Register")}>Go to Register page</button></p>
        <p><button onClick={()=> router("/Mens")}>Go to Mens page</button></p>
        <p><button onClick={()=> router("/Profile")}>Go to Profile page</button></p>
        <p><button onClick={()=> router("/Use-State")}>Go to UseState page</button></p>
        <p><button onClick={()=> router("/Use-Effect")}>Go to UseEffect page</button></p>
        <p><button onClick={()=> router("/Use-Effect2")}>Go to UseEffect2 page</button></p>
        <p><button onClick={()=> router("/Use-Effect3")}>Go to UseEffect3 page</button></p>
        <p><button onClick={()=> router("/use-navigate")}>Go to Navigate page</button></p>

    </div>;
   

    }
    
    export default Home;