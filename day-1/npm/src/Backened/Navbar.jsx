import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../Context/authcontext";

const Navbar = () => {
  const router = useNavigate();
  const { state } = useContext(authcontext);
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        border: "2px solid black",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2 onClick={() => router("/")}>Home</h2>
      {state?.user?.role == "admin" && (
        <h2 onClick={() => router("/add-product")}>Add Product</h2>
      )}
      {state?.user ? (
        <>
          <h2>Logout</h2>
        </>
      ) : (
        <>
          <h2 onClick={() => router("/login")}>Login/Register</h2>
        </>
      )}
    </div>
  );
};

export default Navbar;