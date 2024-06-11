import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WeatherWeb(){
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: 'sunnyvale',
          format: 'json',
          u: 'f'
                },
        headers: {
          'x-rapidapi-key': 'caaea96702msh0cbc3ed36797b3ap15ec96jsn30817794d7f0',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        
                }
     
                    }; // const options ends

      const [userdata, setuserData]= useState([]);

      async function handleSubmit(){

        // event.preventDefault();
        try {
            const response = await axios.request(options);
            console.log(response.data);
            // console.log("Data")
            setuserData(response.data);
        } 
        catch (error) {
            console.error(error);
                    }

      }

      useEffect(()=>{

        handleSubmit();   ///calling function(api)
    }, []);
    


  return (
 <>
    <div>
       <h1>Weather</h1>
      {/* <input  type="text" name="location" id=""/> */}
      {/* <input type="submit" name="Click Me" id="" value="Click Me! "/> */}
      {/* <button onClick={handleSubmit}>CLick Me!</button> */}
      <div>
      {userdata.map((data)=>(
        <p>loca:-{data.current_observation} </p>
    ))}</div>
      {/* <div>
        {userdata.map((data)=>
        (
        <div> 
        <p>Location: {data.location}</p>
        <p>Location: {data.location}</p>
        <p>Location: {data.location}</p>
        
        </div>
      ))}
      </div> */}

    </div>
    </> 
  )
}

export default WeatherWeb;
