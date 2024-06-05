import React from 'react'
import "../Style/externalstyling.css"

// IN REACT, we use CAMEL CASE(fontStyle,fontWeight etc) in styling

const InlineStyling = () => {
  return (
    <div style={{color:"red", fontSize:"30px", fontWeight: "bold" }}>
      <h1>THIS IS INLINE STYLING</h1>
      <p className="col-green">ThIS is EXTERNAL CSS</p>
    </div>
  );
}

export default InlineStyling;
