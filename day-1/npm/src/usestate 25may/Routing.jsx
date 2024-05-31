import { useNavigate } from "react-router-dom";

function Routing(){

    const router=useNavigate();
    return( 
    <div>

        <h1>Testing UseNavigate</h1>
        <button onClick={()=> router("/")}>Go To Home Page</button>
    </div>

);
}

export default Routing;